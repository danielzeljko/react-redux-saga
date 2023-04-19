import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
    console.log("[Reducer called] cartData");

    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];   
        case REMOVE_FROM_CART:
            // TODO: Ideally we want to remove based on the product ID
            // instead of just removing the last item...
            return data.slice(0, -1);   
        case EMPTY_CART:
            return [];   
        default:
            return data;
    }
}