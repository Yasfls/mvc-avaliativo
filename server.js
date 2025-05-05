const express = require('express');
const ProjectController = require('./src/controllers/projectController');
const TaskController = require('./src/controllers/taskController');
const UserController = require('./src/controllers/userController');
const database = require('./config/database');

console.log('Starting server....');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
 res.send({ response: 'Hello World!' });
});

app.post('/api/login', UserController.login);
app.post('/api/users', UserController.register);

app.use(UserController.validarToken); // Middleware para validar o token

app.get('/api/users', UserController.listarUsuario);
app.put('/api/users/:id', UserController.alterarUsuario);
app.delete('/api/users/:id', UserController.deletarUsuario);
app.get('/api/logs', loggerApi.listLog); // Certifique-se de que loggerApi está importado corretamente

app.post('/api/projects', ProjectController.create);
app.get('/api/projects', ProjectController.list);
app.put('/api/projects/:id', ProjectController.update);
app.delete('/api/projects/:id', ProjectController.delete);

app.post('/api/tasks', TaskController.create);
app.get('/api/tasks', TaskController.list);
app.put('/api/tasks/:id', TaskController.update);
app.delete('/api/tasks/:id', TaskController.delete);

database.db.sync({ force: false }) // Use force: false para não recriar tabelas existentes
 .then(() => {
 app.listen(3000, () => {
 console.log('Server is running on port 3000 🚀');
 });
 })
 .catch((error) => {
 console.error('Error connecting to the database', error);
 });