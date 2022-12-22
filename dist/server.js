"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//DB and authenticateUser
const connect_1 = __importDefault(require("./db/connect"));
//Routers
const authRoutes_1 = __importDefault(require("./Routes/authRoutes"));
//Middleware
const not_found_1 = __importDefault(require("./middleware/not-found"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("welcome");
});
app.use("/api/v1/auth", authRoutes_1.default);
app.use(not_found_1.default);
app.use(error_handler_1.default);
const PORT = process.env.PORT || 5000;
const start = async () => {
    try {
        await (0, connect_1.default)(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log("Server up at port: ", PORT);
        });
    }
    catch (error) {
    }
};
start();
