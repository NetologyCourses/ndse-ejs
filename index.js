const express = require('express')
const errorMiddleware = require('./middleware/error')

const PORT = process.env.PORT || 3000

const indexRouter = require('./routes/index')
const todoRouter = require('./routes/todo')

const app = express()
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/todo', todoRouter)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})