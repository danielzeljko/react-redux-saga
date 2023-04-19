import { FETCH_PRODUCTS } from "./constant";

export const fetchProducts = async () => {
    // Actions must be plain objects. Use custom middleware for async actions.
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();

    return {
        type: FETCH_PRODUCTS,
        data
    }
}
