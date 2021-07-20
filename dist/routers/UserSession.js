"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    app.get('/session/login', (req, res) => {
        res.send("Logged In Successfully");
    });
};
exports.register = register;
//# sourceMappingURL=UserSession.js.map