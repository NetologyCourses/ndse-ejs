const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')
const arr = [1,2,3]

class Todo {
    constructor(title = '', description = '', id = uuid()) {
        this.title = title
        this.description = description
        this.id = id
    }
}

const store = {
    todo: []
}

arr.map((el) => {
    const newTodo = new Todo(`todo ${el}`, `description todo ${el}`)
    store.todo.push(newTodo)
})

router.get('/', (req, res) => {
    //
})

router.get('/create', (req, res) => {
    //
})

router.post('/create', (req, res) => {
    //
})

router.get('/:id', (req, res) => {
    //
})

router.get('/update/:id', (req, res) => {
    //
})

router.post('/update/:id', (req, res) => {
    //
})

router.post('/delete/:id', (req, res) => {
    //
})

module.exports = router
