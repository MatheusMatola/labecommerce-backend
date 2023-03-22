import { newUsers,productList,purchaseItem } from "./database"



export type TUser = {

    id: string,
    email: string,
    password: string,

}


export type TProduct = {

    id: string,
    name: string,
    price: number,
    categoty: string,

}


export type TPurchase = {

    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number,

}

console.log(newUsers)

console.log(productList)

console.log(purchaseItem)