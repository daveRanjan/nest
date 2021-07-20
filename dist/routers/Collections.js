"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    app.post('/collections', (req, res) => {
        // @ts-ignore
        console.log(req.files);
        res.send("Data Uploaded Successfully");
    });
};
exports.register = register;
//# sourceMappingURL=Collections.js.map