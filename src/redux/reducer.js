import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    console.log("[Reducer called] cartData");
    
    if (action.type === ADD_TO_CART) {
        console.log("found action");
        return data
    }

    return "no action provided"
}