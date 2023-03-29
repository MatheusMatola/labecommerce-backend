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


export enum CATEGORY {

    ACAO= "Acao e Aventura",
    RPG= "RPG",
    MUNDO_ABERTO = "Mundo Aberto",
    
    
    }


