import express, { Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import flightRouter from './routes/flights.routes';
import currencyRouter from './routes/currencies.routes';
import bookRouter from './routes/book.routes';
import userRouter from './routes/user.routes';
import discountRouter from './routes/discounts.routes';

import session from 'express-session';

const app = express();


declare module 'express-session' {
  export interface SessionData {
    userId: number ;
  }
}
//app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);
app.use(flightRouter);
app.use(discountRouter);
app.use(currencyRouter);

app.get('/health', (_, res: Response) => {
  res.sendStatus(200);
});

app.listen(8080, function (){
  console.log('app is listening on port 8080');
});