const express = require('express')
const ProductController = require('./controllers/userController')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/users', UserController.insert)
app.get('/users', UserController.findAll)
app.put('/users/:id', UserController.update)
app.delete('/users/:id', UserController.delete)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})