const express = require('express')
const ProjectController = require('./controllers/projectController')
const TaskController = require('./controllers/taskController')
const UserController = require('./controllers/userController')

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/project', ProjectController.insert)
app.get('/project', ProjectController.findAll)
app.put('/project/:id', ProjectController.update)
app.delete('/project/:id', ProjectController.delete)

app.post('/task', TaskController.insert)
app.get('/task', TaskController.findAll)
app.put('/task/:id', TaskController.update)
app.delete('/task/:id', TaskController.delete)

app.post('/user', UserController.insert)
app.get('/user', UserController.findAll)
app.put('/user/:id', UserController.update)
app.delete('/users/:id', UserController.delete)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})