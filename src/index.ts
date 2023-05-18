// import express from 'express';
// import { Router, Request, Response } from 'express';

import { Client } from "./machines/Client";

// const app = express();

// const route = Router();

// route.get('/', (req: Request, res: Response) => {
//     res.send({message: 'hello world'});
// })
// route.get('user/open')

// app.use(route);

// app.listen(8000, () => console.log('server is running'));

Client.getInstance().connect();
Client.getInstance().closeConnection();