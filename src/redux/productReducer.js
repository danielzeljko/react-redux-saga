import { FETCH_PRODUCTS } from "./constant";

export const productData = (data = [], action) => {
    console.log("🚀 ~ file: productReducer.js:4 ~ productData ~ data:", data)

    switch (action.type) {
        case FETCH_PRODUCTS:
            return [action.data];   
        default:
            return data;
    }
}