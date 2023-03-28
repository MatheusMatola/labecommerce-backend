import { TUser, TProduct, TPurchase, } from ".";



export enum CATEGORY {

    ACAO= "Acao e Aventura",
    RPG= "RPG",
    MUNDO_ABERTO = "Mundo Aberto",
    
    
    }

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
    category: CATEGORY.ACAO

},

{ 

    id: "jogo2",
    name: "Red Dead Redemption 2",
    price: 350.00,
    category: (CATEGORY.RPG, CATEGORY.MUNDO_ABERTO)

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

//Função para cadastrar novos usuarios

const newUser: TUser[] = [];
  
export function createUser(id: string, email: string, password: string) {
  const newUser= { id, email, password };
  newUsers.push(newUser);

  return console.log("Cadastro realizado com sucesso!")
}


// Função que retorna todos os usuarios
function getAllUsers() {
    return newUsers;
  }



// Função para cadastrar novos produtos

const novoProduto: TProduct[] = [];

export function createProduct (id: string, name: string, price: number, category: CATEGORY){

    const novoProduto = {id , name , price, category};

    productList.push(novoProduto);

    return console.log("Produto cadastrado com sucesso!")

}


// Função para procurar produto pelo ID


export function procurarProtudoPeloId(id: string): TProduct | undefined{

    return productList.find((product) => product.id === id);

}



//Função para buscar produtos pelo nome


export function querryProductsByName(name: string): TProduct | undefined{

   return productList.find((product) => product.name.toLocaleLowerCase() === name.toLocaleLowerCase());


}


//Função para criar uma nova compra na lista de purchases


export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number) {

    const novaCompra= {userId, productId, quantity, totalPrice}

    purchaseItem.push(novaCompra);

    return console.log("Compra realizada com sucesso")
    
}