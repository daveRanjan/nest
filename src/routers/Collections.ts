import  * as express from 'express';

export const register = (app: express.Application) => {
    app.post('/collections', (req, res) => {
        // @ts-ignore
        console.log(req.files);
        res.send("Data Uploaded Successfully")
    })
}