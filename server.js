const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'docker',
  port: 5432,
})
const getmessage = (request, response) => {
  pool.query('SELECT * FROM message', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getmessageById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM message WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const insertNewMsg = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO message (message) VALUES ($1)', [message], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Message added with ID: ${result.insertId}`)
  })
}


const deleteMsg = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM message WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Message deleted with ID: ${id}`)
  })
}

module.exports = {
  getmessage,
  getmessageById,
  insertNewMsg,
  deleteMsg
}