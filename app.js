const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const parser = require('body-parser')
const queries = require('./queries')
const cors = require('cors')

app.use(parser.json())
app.use(cors())

app.get('/', (req, res, next) => {
    queries.listAll()
    .then(movies => res.send(movies))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id)
    .then(movies => res.send(movies))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body)
    .then(response.status(201))
})

app.delete('/:id', (req,res) =>{
    queries.deleteStudent(req.params.id)
    .then(res.send({ message: "Movie has been deleted"}))
})

app.put('/:id', (req,res) => {
    queries.updateStudent(req.params.id, req.body)
    .then(movies => res.json(movies))
})

app.listen(port, () => console.log(`listening on ${port}`))