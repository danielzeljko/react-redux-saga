import { ADD_TO_CART } from "./constant";

export const addToCart = (data) => {
    console.log("[Action called] addToCart", data);

    return {
        type: ADD_TO_CART,
        data
    }
}