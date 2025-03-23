const express = require('express')
const TaskController = require('./controllers/taskController')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/task', TaskController.insert)
app.get('/task', TaskController.findAll)
app.put('/task/:id', TaskController.update)
app.delete('/task/:id', TaskController.delete)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})