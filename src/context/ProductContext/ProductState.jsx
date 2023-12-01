import axios from 'axios';
import {createContext, useReducer} from 'react';
import ProductReducer from './ProductReducer';

const ThemeId = JSON.parse(localStorage.getItem("selectedThemeId"));
const BoxId = JSON.parse(localStorage.getItem("selectedBoxId"));
const CombinationId = JSON.parse(localStorage.getItem("CombinationId"));

const initialState = {
    CombinationId: CombinationId || 0,
    ThemeId: ThemeId || null,
    BoxId: BoxId || null,
    products: []
};

const API_URL = 'http://localhost:3000/orders';

export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {
    const [state,
        dispatch] = useReducer(ProductReducer, initialState);

    const getProductsInBox = async(ThemeId, BoxId) => {
        try {
            const combinationRes = await axios.get(`${API_URL}/combinationId?ThemeId=${ThemeId}&BoxId=${BoxId}`);
            const CombinationId = combinationRes.data.CombinationId;
            localStorage.setItem('CombinationId', CombinationId);
            dispatch({type: 'GET_COMBINATION_ID', payload: CombinationId});

            const res = await axios.get(`${API_URL}/productsInBox?CombinationId=${CombinationId}`);
            dispatch({type: 'GET_PRODUCTS_IN_BOX', payload: res.data.products});
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProductContext.Provider
            value={{
            CombinationId: state.CombinationId,
            ThemeId: state.ThemeId,
            BoxId: state.BoxId,
            products: state.products,
            getProductsInBox
        }}>
            {children}
        </ProductContext.Provider>
    );
};