import express, { Request, Response, NextFunction } from 'express';
import type { ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import users_routes from './handlers/users';
import products_routes from './handlers/products';
import orders_routes from './handlers/orders';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const { 
  CORS_ORIGIN
} = process.env;




const app: express.Application = express();
const address = '0.0.0.0:8080';

app.use(bodyParser.json());

// Default error handler
// err is type of any because we don't know what will be thrown by environment
// err: any -- we don't know what will be inside error that why any type is fine
const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

//CORS enabled
const corsOptions = {
  origin: CORS_ORIGIN,
  optionSuccessStatus: 200
};

app.use(errorHandler);
app.use(cors(corsOptions));

products_routes(app);
users_routes(app);
orders_routes(app);

app.listen(8080, function () {
  console.log(`starting app on: ${address}`);
});


export default app;
