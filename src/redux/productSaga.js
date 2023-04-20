import { takeEvery, put } from "redux-saga/effects";
import { FETCH_PRODUCTS, SAVE_PRODUCTS } from "./constant";

function* getProducts() {
    const resp = yield fetch('https://dummyjson.com/products');
    const data = yield resp.json();
    console.log("get product saga called", data);
    yield put({
        type: SAVE_PRODUCTS,
        data
    })

}

function* productSaga() {
    yield takeEvery(FETCH_PRODUCTS, getProducts);
}

export default productSaga;