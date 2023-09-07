const express = require('express')
const app = express()
const router = require('./routes/flights.routes.js')
const bodyParser = require('body-parser');

const fs = require('fs')

if (!fs.existsSync('./books.json')) {
  fs.writeFileSync('./books.json', '')
}
app.use(bodyParser.json());

app.use(router);

app.listen(8080, function (){
  console.log('app is listening on port 8080')
})