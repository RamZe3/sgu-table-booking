import axios from "axios";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import {API_URL, USER_API_URL} from "@/common/API";
import {newGuid} from "@/common/GuidLogic";

export function useUser() {
    const user = ref(
        {
            id: '',
            email: '',
            login: '',
            password: '',
        })

    const store = useStore()

    const login = async () => {
        const response = await axios.get(API_URL + USER_API_URL + '/?login=' + user.value.login
            + "&password=" + user.value.password);

        if (response.data.length === 1) {
            localStorage.setItem("userID", response.data[0].id)
            localStorage.setItem("Login", user.value.login)
            store.commit("setIsAuth", true)
        } else {
            store.commit("setErrorMessage", "Неверно указан логин или пароль")
        }
    }

    const register = async () => {
        const response = await axios.get(API_URL + USER_API_URL + '/?login=' + user.value.login);
        if (response.data.length === 0) {
            localStorage.setItem("userID", user.value.id)
            localStorage.setItem("Login", user.value.login)
            store.commit("setIsAuth", true)
            const newUser = {
                id: newGuid(),
                login: user.value.login,
                password: user.value.password
            }
            await axios.post(API_URL + USER_API_URL + "/", newUser);
            localStorage.setItem("userID", newUser.id)
        } else {
            store.commit("setErrorMessage", "Пользователь с этим логином уже существует")
        }
    }

    const signOut = () => {
        localStorage.removeItem("userID")
        localStorage.removeItem("Login")
        store.commit("setIsAuth", false)

    }

    const checkAuth = () =>{
        store.dispatch("checkAuth")
    }

    const checkAdminRole = async () =>{
        return localStorage.getItem("Login") === 'admin'
    }

    const getLoginByID = async (id) => {
        const response = await axios.get(API_URL + USER_API_URL + '/?id=' + id);
        return response.data[0]
    }

    onMounted(checkAuth)
    computed(checkAdminRole)

    return {
        register, login, signOut,
        checkAuth, checkAdminRole,
        getLoginByID
    }
}