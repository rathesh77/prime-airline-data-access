const express = require('express')
const app = express()
const flightRouter = require('./routes/flights.routes.js')
const currencyRouter = require('./routes/currencies.routes.js')
const bodyParser = require('body-parser');
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json());
app.use(flightRouter);
app.use(currencyRouter);

app.listen(8080, function (){
  console.log('app is listening on port 8080')
})