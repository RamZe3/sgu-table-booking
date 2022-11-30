//import axios from 'axios'
//import {useStore} from "vuex";

export const globalModule = {
    state: () => ({
        isAuth: false,
        errorMessage: null,
        login: null,
        isAdmin: null,
    }),

    getters: {
        ISAUTH: state => {
            return state.isAuth
        },
        LOGIN: state => {
            return state.login
        },
        ERRORMESSAGE: state => {
            return state.errorMessage
        },
        ISADMIN: state => {
            return state.isAdmin
        },
    },

    mutations: {
        setLogin(state) {
            state.login = localStorage.getItem("Login");
        },
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth;
        },
        setErrorMessage(state, message){
            state.errorMessage = message;
        },
        setIsAdmin(state, a){
            state.isAdmin = a;
        },
    },

    actions: {
        checkAuth:  (context) => {
            if (localStorage.getItem("userID") != null){
                context.commit("setIsAuth", true)
                context.commit("setLogin")
            }
            else {
                context.commit("setIsAuth", false)
            }
        },
    },
}