import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import flightRouter from './routes/flights.routes.js';
import currencyRouter from './routes/currencies.routes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(flightRouter);
app.use(currencyRouter);

app.listen(8080, function (){
    console.log('app is listening on port 8080');
});