import {createContext, useReducer} from "react";
import axios from "axios";
import UserReducer from "./UserReducer.js";
import {useNavigate} from "react-router-dom";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    token: token || null,
    user: user || null,
    loginForm: {
        email: '',
        password: ''
    },
    registerForm: {
        user_name: '',
        shipping_address: '',
        email: '',
        password: ''
    }
};

const API_URL = "http://localhost:3000/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {
    const navigate = useNavigate();

    const [state,
        dispatch] = useReducer(UserReducer, initialState);

    const login = async() => {
        try {
            const res = await axios.post(API_URL + '/login', state.loginForm);
            dispatch({type: 'LOGIN', payload: res.data});
            if (res.data) {
                localStorage.setItem('token', JSON.stringify(res.data.token));
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }
        } catch (error) {
            console.error(error);
        }

    };
    const setLoginFormValue = (name, value) => {
        dispatch({
            type: 'SET_LOGIN_FORM_VALUE',
            payload: {
                name,
                value
            }
        });
    };
    const register = async() => {
        try {
            const res = await axios.post(API_URL, state.registerForm);
            console.log('user', state.registerForm);
            dispatch({type: 'CREATE', payload: res.data});
            navigate('/login')
        } catch (error) {
            console.error(error);
        }

    };
    const setRegisterFormValue = (name, value) => {
        dispatch({
            type: 'SET_REGISTER_FORM_VALUE',
            payload: {
                name,
                value
            }
        });
    };
    const getUser = async() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.get(API_URL + "/info", {
            headers: {
                authorization: token
            }
        });
        dispatch({type: "GET_INFO", payload: res.data});
    };
    const logout = async() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.delete(API_URL + "/logout", {
            headers: {
                authorization: token
            }
        });
        dispatch({type: "LOGOUT"})
        if (res.data) {
            localStorage.clear();
        }
    }
    return (
        <UserContext.Provider
            value={{
            token: state.token,
            user: state.user,
            loginForm: state.loginForm,
            registerForm: state.registerForm,
            login,
            setLoginFormValue,
            register,
            setRegisterFormValue,
            getUser,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
}