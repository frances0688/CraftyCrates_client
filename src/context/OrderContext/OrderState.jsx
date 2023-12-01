import axios from 'axios';
import {createContext, useReducer} from 'react';
import OrderReducer from './OrderReducer';

const initialState = {
    CombinationId: null,
    order: {},
    orders: []
};

const API_URL = 'http://localhost:3000/orders';

export const OrderContext = createContext(initialState);

export const OrderProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(OrderReducer, initialState);

    const createOrder = async(CombinationId) => {
        const token = JSON.parse(localStorage.getItem('token'));
        try {
            const res = await axios.post(API_URL, {
                CombinationId
            }, {
                headers: {
                    Authorization: token
                }
            });
            const action = {
                type: 'CREATE_ORDER',
                payload: res.data.order
            };
            return dispatch(action);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <OrderContext.Provider
            value={{
            CombinationId: state.CombinationId,
            order: state.order,
            orders: state.orders,
            createOrder
        }}>
            {children}
        </OrderContext.Provider>
    );
};
