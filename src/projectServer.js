const express = require('express')
const ProductController = require('./controllers/projectController')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/projects', ProjectController.insert)
app.get('/projects', ProjectController.findAll)
app.put('/projects/:id', ProjectController.update)
app.delete('/projects/:id', ProjectController.delete)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})