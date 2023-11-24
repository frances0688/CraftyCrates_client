import axios from 'axios';
import React, {createContext, useReducer} from 'react';
import BoxReducer from './BoxReducer.js'

const initialState = {
    boxes: []
}

export const BoxContext = createContext(initialState);

export const BoxProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(BoxReducer, initialState);

    const getBoxes = async() => {
        try {
            const res = await axios.get("http://localhost:3000/boxes");
            const action = {
                type: "GET_BOXES",
                payload: res.data
            };
            dispatch(action);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <BoxContext.Provider
            value={{
            boxes: state.boxes,
            getBoxes
        }}>
            {children}
        </BoxContext.Provider>
    );
};
