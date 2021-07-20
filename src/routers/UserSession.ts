import  * as express from 'express';

export const register = (app: express.Application) => {
    app.get('/session/login', (req, res) => {
        res.send("Logged In Successfully");
    })
}