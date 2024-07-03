"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const barRoutes_1 = __importDefault(require("./routes/barRoutes"));
const livraisonRoutes_1 = __importDefault(require("./routes/livraisonRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const swagger_1 = require("./swagger");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('/users', userRoutes_1.default);
app.use('/auth', authRoutes_1.default);
app.use('/bars', barRoutes_1.default);
app.use('/livraisons', livraisonRoutes_1.default);
(0, swagger_1.setupSwagger)(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
