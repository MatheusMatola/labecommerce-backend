import { TUser, TProduct, TPurchase } from ".";


export const newUsers : TUser[] = [
{
    id:"Matheus",
    email: "matola@gmail.com",
    password: "forahacker123"
},

{
    id:"Chico",
    email: "chico@gmail.com",
    password: "sou1cachorro123"
}
]

export const productList: TProduct[]= [

{ 

    id: "jogo1",
    name: "The Last of US Part II",
    price: 250.00,
    categoty: 'Dor&Sofrimento',

},

{ 

    id: "jogo2",
    name: "Red Dead Redemption 2",
    price: 350.00,
    categoty: 'simulador de Goiás',

}
]



export const purchaseItem: TPurchase[]=[

{
    userId: "Matheus",
    productId: "Jogo1",
    quantity: 1,
    totalPrice: 250.00,

},
{
    userId: "Chico",
    productId: "Jogo2",
    quantity: 1,
    totalPrice: 350.00,

}



]