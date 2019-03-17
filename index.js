const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./server')
const port = 8082

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/message', db.getmessage)
app.get('/message/:id', db.getmessageById)
app.post('/message, db.insertNewMsg)
app.delete('/message/:id', db.deleteMsg)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})