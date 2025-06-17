import {productData, basketData} from "./data.js";

export function fakeFetchProduct() {
    return new Promise(res => {
        setTimeout(() => {
            res(productData)
        }, 2)
    })
}

export function fakeFetchBasket() {
    return new Promise(res => {
        setTimeout(() => {
            res(basketData)
        }, 2)
    })
}