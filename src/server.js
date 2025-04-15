const express = require('express')
const ProjectController = require('./controllers/projectController')
const TaskController = require('./controllers/taskController')
const UserController = require('./controllers/userController')
const database = require('./config/database');

console.log('Starting server....')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})
app.post('/login', userApi.login);
app.post('/users', userApi.criarUsuario);

app.use(userApi.validarToken);
app.get('/users', userApi.listarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);
app.get('/logs', loggerApi.listLog);

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

database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });