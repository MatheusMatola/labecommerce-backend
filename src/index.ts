import { newUsers,productList,purchaseItem, createUser, createProduct, procurarProtudoPeloId, querryProductsByName} from "./database"

import express, {Request, Response} from 'express';

import cors from 'cors';
import { CATEGORY, TProduct, TPurchase, TUser } from "./type";

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


// GetAllUser
  app.get('/users', (req: Request, res: Response)=>{

    res.status(200).send(newUsers)

})


//GetAllProducts
app.get('/products', (req: Request, res: Response)=>{

    res.status(200).send(productList)

})


//SearchProductByName
app.get('/products/search', (req: Request, res: Response)=>{
    
    const q= req.query.q as string

    const result = productList.filter((products)=>{
        
        return products.name.includes(q)

    })

    res.status(200).send(result)

})


//CreateUser
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


//CreateProduct
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


//CreatePurchase
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


//GetProductById
app.get('/products/:id', (req: Request, res: Response)=>{
    
    const id= req.params.id as string

    const result = productList.filter((products)=>{
        
        return products.id.includes(id)

    })

    res.status(200).send(result)

})


//GetUserPurchasesByUserid
app.get('/users/:id/purchases', (req: Request, res: Response)=>{
    
    const id= req.params.id as string

    const result = purchaseItem.filter((purchase)=>{
        
        return purchase.userId.includes(id)

    })

    res.status(200).send(result)

})


//DeleteUserById
app.delete('/users/:id', (req: Request, res: Response) => {

    const id = req.params.id

    const usersIndex = newUsers.findIndex((users) => users.id === id)

    if (usersIndex >= 0) {



        newUsers.splice(usersIndex, 1)
    }

    res.status(200).send("Item deletado com sucesso")
})


//DeleteProductById
app.delete('/products/:id', (req: Request, res: Response) => {

    const id = req.params.id

    const productsIndex = productList.findIndex((productList) => productList.id === id)

    if (productsIndex >= 0) {



        productList.splice(productsIndex, 1)
    }

    res.status(200).send("Produto apagado com sucesso")

})


//EditUserById
app.put('/users/:id', (req: Request, res: Response) => {

    const id = req.params.id

		const newId = req.body.id as string | undefined         
		const newEmail = req.body.email as string | undefined    
		const newPassword = req.body.password as string | undefined       


    const user = newUsers.find((user) => user.id === id)

	
    if (user) {
        
        user.id = newId || user.id
        user.email = newEmail || user.email
        user.password = newPassword || user.password


				
    }

    res.status(200).send("Atualização realizada com sucesso")
})


//EditProductById
app.put('/products/:id', (req: Request, res: Response) => {

    const id = req.params.id

		const newId = req.body.id as string | undefined         
		const newName = req.body.name as string | undefined    
		const newPrice = req.body.price as number | undefined       
        const newCategory = req.body.category as CATEGORY | undefined

    const product = productList.find((product) => product.id === id)

	
    if (product) {
        
        product.id = newId || product.id
        product.name = newName || product.name
        product.price= newPrice || product.price
        product.category= newCategory || product.category


				
    }

    res.status(200).send("Atualização realizada com sucesso")
})
































// createUser("Marcola", "marcola@email.com", "123")

// createProduct("p004", "The Witcher 3", 200, CATEGORY.MUNDO_ABERTO)

// console.log(newUsers)

// console.log(productList)

// console.log(purchaseItem)


//console.log(procurarProtudoPeloId("jogo1"))

//console.log(querryProductsByName("red  2"))