import { FETCH_PRODUCTS, SAVE_PRODUCTS } from "./constant";

export const productData = (data = [], action) => {
    console.log("🚀 ~ file: productReducer.js:4 ~ productData ~ data:", data)

    switch (action.type) {
        case SAVE_PRODUCTS:
            console.log("action=", action)
            return [...action.data.products];   
        default:
            return data;
    }
}
