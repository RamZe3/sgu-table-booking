import {ref} from "vue";
import axios from "axios";
import {API_URL} from "@/common/API";

export function useTableBooks(){
    const tables = ref([
        {id: 1,
        isBooked: false},
        //TODO
    ])

    const bookingTables = ref([])
    const currentDate = ref(new Date())
    const bookingDate = ref()

    //const setDate = (date) => {
    //    currentDate.value = date
    //}

    const getTablesByDate = async () => {
        //TODO
        //const response = await axios.get(API_URL + "");
    }

    const bookingTable = async (id) => {
        //TODO axios

    }

    const getBookingTables = async () =>{
        //TODO axios
    }


    return {tables, currentDate, bookingDate, bookingTables,
        getTablesByDate, bookingTable, getBookingTables}
}