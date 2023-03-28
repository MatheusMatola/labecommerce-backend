import { newUsers,productList,purchaseItem, CATEGORY, createUser, createProduct, procurarProtudoPeloId, querryProductsByName} from "./database"



export type TUser = {

    id: string,
    email: string,
    password: string,

}



export type TProduct = {

    id: string,
    name: string,
    price: number,
    category: CATEGORY,

}


export type TPurchase = {

    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number,

}



// createUser("Marcola", "marcola@email.com", "123")

// createProduct("p004", "The Witcher 3", 200, CATEGORY.MUNDO_ABERTO)

// console.log(newUsers)

// console.log(productList)

// console.log(purchaseItem)


console.log(procurarProtudoPeloId("jogo1"))

console.log(querryProductsByName("red  2"))