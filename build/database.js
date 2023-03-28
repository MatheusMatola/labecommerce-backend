"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchase = exports.querryProductsByName = exports.procurarProtudoPeloId = exports.createProduct = exports.createUser = exports.purchaseItem = exports.productList = exports.newUsers = exports.CATEGORY = void 0;
var CATEGORY;
(function (CATEGORY) {
    CATEGORY["ACAO"] = "Acao e Aventura";
    CATEGORY["RPG"] = "RPG";
    CATEGORY["MUNDO_ABERTO"] = "Mundo Aberto";
})(CATEGORY = exports.CATEGORY || (exports.CATEGORY = {}));
exports.newUsers = [
    {
        id: "Matheus",
        email: "matola@gmail.com",
        password: "forahacker123"
    },
    {
        id: "Chico",
        email: "chico@gmail.com",
        password: "sou1cachorro123"
    }
];
exports.productList = [
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
];
exports.purchaseItem = [
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
];
const newUser = [];
function createUser(id, email, password) {
    const newUser = { id, email, password };
    exports.newUsers.push(newUser);
    return console.log("Cadastro realizado com sucesso!");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.newUsers;
}
const novoProduto = [];
function createProduct(id, name, price, category) {
    const novoProduto = { id, name, price, category };
    exports.productList.push(novoProduto);
    return console.log("Produto cadastrado com sucesso!");
}
exports.createProduct = createProduct;
function procurarProtudoPeloId(id) {
    return exports.productList.find((product) => product.id === id);
}
exports.procurarProtudoPeloId = procurarProtudoPeloId;
function querryProductsByName(name) {
    return exports.productList.find((product) => product.name.toLocaleLowerCase() === name.toLocaleLowerCase());
}
exports.querryProductsByName = querryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    const novaCompra = { userId, productId, quantity, totalPrice };
    exports.purchaseItem.push(novaCompra);
    return console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
//# sourceMappingURL=database.js.map