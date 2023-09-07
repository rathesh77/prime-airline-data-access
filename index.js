const express = require('express')
const app = express()
const router = require('./routes/flights.routes.js')

const fs = require('fs')

if (!fs.existsSync('./books.json')) {
  fs.appendFileSync('./books.json', '')
}
app.use(router);

app.listen(8080, function (){
  console.log('app is listening on port 8080')
})