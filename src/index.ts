import express from 'express';
import * as routes from './routers';
import fileUpload from 'express-fileupload';

const app = express();
const port = 8080; // default port to listen

app.use(fileUpload())
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

routes.UserSessions.register(app);
routes.Collections.register(app);