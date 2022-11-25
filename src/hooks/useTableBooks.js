import {ref} from "vue";
import axios from "axios";
import {API_URL, BOOKING_API_URL} from "@/common/API";
import {newGuid} from "@/common/GuidLogic";
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
        //TODO
    ])

    const bookingTables = ref([])

    const currentDate = ref(moment())

    //Для клиента
    const getTablesByDate = async () => {
        const response = await
            axios.get(API_URL + BOOKING_API_URL + '/?bookingDate=' + currentDate.value.
            format("YYYY:MM:DD"));

        for (let i = tables.value.length; i > 0; i--){
            let findItem = response.data.find(item => item.tableId === tables.value[i].id)
            if (findItem !== undefined){
                tables.value[i].isBooked = true
            }
            else {
                tables.value[i].isBooked = false
            }
        }
    }

    const bookingTable = async (id) => {
        const newBooking = {
            id: newGuid(),
            tableId: id,
            userId: localStorage.getItem("UserID"),
            bookingTime: currentDate.value.format("HH"),
            bookingDate: currentDate.value.format("YYYY:MM:DD"),
        }

        await axios.post(API_URL + BOOKING_API_URL + "/", newBooking);

    }

    //Для админа
    const getBookingTables = async () => {
        const response = await
            axios.get(API_URL + BOOKING_API_URL + '/?bookingDate=' + currentDate.value.
            format("YYYY:MM:DD"));
        
        bookingTables.value = response.data
    }


    return {
        tables, currentDate, bookingTables,
        getTablesByDate, bookingTable, getBookingTables
    }
}