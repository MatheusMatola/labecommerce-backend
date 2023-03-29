"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Sevidor rodando na porta 3003");
});
console.log((0, database_1.procurarProtudoPeloId)("jogo1"));
console.log((0, database_1.querryProductsByName)("red  2"));
//# sourceMappingURL=index.js.map