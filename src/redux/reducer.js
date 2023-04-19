import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    console.log("[Reducer called] cartData");

    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];   
        default:
            return data;
    }
}