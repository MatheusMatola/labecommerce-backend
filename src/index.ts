import { newUsers,productList,purchaseItem, createUser, createProduct, procurarProtudoPeloId, querryProductsByName} from "./database"

import express, {Request, Response} from 'express';

import cors from 'cors';
import { TProduct, TPurchase, TUser } from "./type";

const app = express();

app.use(express.json());

app.use(cors());


app.listen(3003, () => {

console.log("Sevidor rodando na porta 3003")

});


//teste
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!");
})


 // Get All User
  app.get('/users', (req: Request, res: Response)=>{

    res.status(200).send(newUsers)

})


//Get All Products
app.get('/products', (req: Request, res: Response)=>{

    res.status(200).send(productList)

})


//Search Product by name
app.get('/products/search', (req: Request, res: Response)=>{
    
    const q= req.query.q as string

    const result = productList.filter((products)=>{
        
        return products.name.includes(q)

    })

    res.status(200).send(result)

})


//Create User
app.post ('/users', (req: Request, res: Response)=>{

    const id = req.body.id
    const email = req.body.email
    const password = req.body.password


    const newUser: TUser={

        id,
        email,
        password
    }

    newUsers.push(newUser)

    res.status(200).send("Cadastro realizado com sucesso")

})


//Create Product
app.post ('/products', (req: Request, res: Response)=>{

    const id = req.body.id
    const name = req.body.name
    const price = req.body.price
    const category = req.body.category

    const newProduct: TProduct={

        id,
        name,
        price,
        category
        
    }

    productList.push(newProduct)

    res.status(200).send("Cadastro realizado com sucesso")

})


//Create Purchase
app.post ('/purchases', (req: Request, res: Response)=>{

    const userId = req.body.userId
    const productId = req.body.productId
    const quantity = req.body.quantity
    const totalPrice = req.body.totalPrice


    const newPurchase: TPurchase={

        userId,
        productId,
        quantity,
        totalPrice

    }

    purchaseItem.push(newPurchase)

    res.status(200).send("Compra realizada com sucesso")

})



// createUser("Marcola", "marcola@email.com", "123")

// createProduct("p004", "The Witcher 3", 200, CATEGORY.MUNDO_ABERTO)

// console.log(newUsers)

// console.log(productList)

// console.log(purchaseItem)


//console.log(procurarProtudoPeloId("jogo1"))

//console.log(querryProductsByName("red  2"))