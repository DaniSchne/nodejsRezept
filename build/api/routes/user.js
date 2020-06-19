"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import middlewares from '../middlewares';
const route = express_1.Router();
exports.default = (app) => {
    app.use('/users', route);
    route.get('/me', (req, res) => {
        // route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
        return res.json({ message: "It`s a me Mario" }).status(200);
    });
};
//# sourceMappingURL=user.js.map