"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authController_1 = require("../controller/authController");
router.route("/register").post(authController_1.register);
router.route("/login").post(authController_1.login);
router.route("/update").post(authController_1.update);
exports.default = router;
