import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
    console.log("[Action called] addToCart", data);

    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.log("[Action called] removeFromCart", data);
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const resetCart = (data) => {
    console.log("[Action called] resetCart", data);
    return {
        type: EMPTY_CART,
    }
}