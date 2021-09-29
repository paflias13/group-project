import { createContext, useEffect, useReducer } from 'react'
import productReducer from './productReducer'

const INITIAL_STATE = {
    products: JSON.parse(localStorage.getItem('products'))

}

export const ProductContext = createContext(INITIAL_STATE)

export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(state.products))
    }, [state.products])

    return (
        <ProductContext.Provider value={{
            products: state.products,
            dispatch
        }}>
            {children}
        </ProductContext.Provider>
    )
}
