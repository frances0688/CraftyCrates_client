import axios from 'axios';
import {createContext, useReducer} from 'react';
import ThemeReducer from './ThemeReducer.js'

const initialState = {
    themes: []
}

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(ThemeReducer, initialState);

    const getThemes = async() => {
        try {
            const res = await axios.get("http://localhost:3000/themes");
            const action = {
                type: "GET_THEMES",
                payload: res.data
            };
            dispatch(action);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ThemeContext.Provider
            value={{
            themes: state.themes,
            getThemes
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
