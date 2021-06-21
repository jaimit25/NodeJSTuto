const express = require('express')
const app = express()
const port = 100;

//in express all the details like content-type etc are already setup
//express is different from http server which make get post ... request more easy
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})