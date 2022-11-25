//import axios from 'axios'
//import {useStore} from "vuex";

export const globalModule = {
    state: () => ({
        isAuth: false,
        errorMessage: null
    }),

    getters: {
        ISAUTH: state => {
            return state.isAuth
        },
        LOGIN: () => {
            return localStorage.getItem("Login")
        },
        ERRORMESSAGE: state => {
            return state.errorMessage
        },
    },

    mutations: {
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth;
        },
        setErrorMessage(state, message){
            state.errorMessage = message;
        },
    },

    actions: {
        checkAuth:  (context) => {
            if (localStorage.getItem("userID") != null){
                context.commit("setIsAuth", true)
            }
            else {
                context.commit("setIsAuth", false)
            }
        },
    },
}