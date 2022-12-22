"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Error handle middleware
const NotFoundMiddleware = (req, res) => res.status(404).send("Route does not exist");
exports.default = NotFoundMiddleware;
