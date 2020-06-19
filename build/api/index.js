"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import auth from './routes/auth';
const user_1 = __importDefault(require("./routes/user"));
// import agendash from './routes/agendash';
// guaranteed to get dependencies
exports.default = () => {
    const app = express_1.Router();
    // auth(app);
    user_1.default(app);
    // agendash(app);
    return app;
};
//# sourceMappingURL=index.js.map