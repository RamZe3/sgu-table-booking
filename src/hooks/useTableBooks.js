import {computed, onMounted, ref} from "vue";
import axios from "axios";
import {API_URL, BOOKING_API_URL, USER_API_URL} from "@/common/API";
//import {newGuid} from "@/common/GuidLogic";
import moment from "moment";

export function useTableBooks() {
    //moment().set({date: 1}) .format("YYYY:MM:DD")
    //moment("12-25-1995", "MM-DD-YYYY").add("0", "month").format("YYYY:MM:DD")
    //moment().format("HH")

    const tables = ref([
        {
            id: 1,
            isBooked: false
        },
        {
            id: 2,
            isBooked: false
        },
        {
            id: 3,
            isBooked: false
        },
        {
            id: 4,
            isBooked: false
        },
        {
            id: 5,
            isBooked: false
        },
        {
            id: 6,
            isBooked: false
        },
        {
            id: 7,
            isBooked: false
        },
        {
            id: 8,
            isBooked: false
        },
        {
            id: 9,
            isBooked: false
        },
        {
            id: 10,
            isBooked: false
        },
        {
            id: 11,
            isBooked: false
        },
        {
            id: 12,
            isBooked: false
        },
        {
            id: 13,
            isBooked: false
        },
        {
            id: 14,
            isBooked: false
        },
        {
            id: 15,
            isBooked: false
        },
        {
            id: 16,
            isBooked: false
        },
        {
            id: 17,
            isBooked: false
        },
        {
            id: 18,
            isBooked: false
        },
    ])

    const bookingTables = ref([])
    const countOfBooking = ref(0)

    const currentDate = ref(moment( moment().format('YYYY-MM-DD') + "10:00", 'YYYY-MM-DD'+"mm:ss"))
    const maxDate = ref(moment().add(14,'days'))
    const minDate = ref(moment())

    const updateCurrentDate = (date, form) => {
        if (form === 'YYYY-MM-DD'){
            currentDate.value = moment(date + "10:10", form+"mm:ss")
        }
        if (form === 'mm:ss'){
            currentDate.value = moment( currentDate.value.format('YYYY-MM-DD') + date, 'YYYY-MM-DD'+form)
        }
        console.log(currentDate.value.format('mm:ss'))
    }

    //Для клиента
    const getTablesByDate = async () => {
        const response = await
            axios.get(API_URL + BOOKING_API_URL + '/?bookingDate=' + currentDate.value.
            format("YYYY:MM:DD"));

        console.log(response.data)
        for (let i = tables.value.length-1; i >= 0; i--){
            let findItem = response.data.find(item => item.tableId-1 === tables.value[i].id-1)
            if (findItem !== undefined){
                tables.value[i].isBooked = true
            }
            else {
                tables.value[i].isBooked = false
            }
        }
    }

    const bookingTable = async (id) => {
        const response = await axios.get(API_URL + BOOKING_API_URL)
        countOfBooking.value = response.data.last

        const newBooking = {
            id: countOfBooking.value,
            tableId: id,
            userId: localStorage.getItem("userID"),
            bookingTime: currentDate.value.format("hh:mm"),
            bookingDate: currentDate.value.format("YYYY:MM:DD"),
        }
        await axios.post(API_URL + BOOKING_API_URL + "/", newBooking);

    }

    //Для админа
    const getBookingTables = async () => {
        //console.log(API_URL + BOOKING_API_URL + '/?bookingDate=' + currentDate.value.
        //format("YYYY:MM:DD"))
        const response = await
            axios.get(API_URL + BOOKING_API_URL + '/?bookingDate=' + currentDate.value.
            format("YYYY:MM:DD"));
        
        bookingTables.value = response.data

        for (let i = 0; i < bookingTables.value.length; i++){
            const response = await axios.get(API_URL + USER_API_URL + '/?id=' + bookingTables.value[i].userId)
                bookingTables.value[i].phone = response.data[0].phone
                bookingTables.value[i].login = response.data[0].login

        }

        bookingTables.value = response.data
    }

    const deleteBooking = async (id) => {
        console.log(id)
        //TODO json-server
        //await axios.delete(API_URL + BOOKING_API_URL + '/' + id + "/");

        getBookingTables()
    }

    const checkTable = (id) => {
        return tables.value[id].isBooked
    }

    computed(checkTable)
    onMounted(getTablesByDate)
    onMounted(getBookingTables)


    return {
        tables, currentDate, bookingTables, maxDate, minDate,
        getTablesByDate, bookingTable, getBookingTables, updateCurrentDate, checkTable, deleteBooking
    }
}