const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let users = [];
let projects = [];

// Rotas para tarefas (tasks)
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).send(task);
});

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index] = req.body;
    res.send(tasks[index]);
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});

app.get('/tasks', (req, res) => {
  res.send(tasks);
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});

// Rotas para usuários (users)
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = req.body;
    res.send(users[index]);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

// Rotas para projetos (projects)
app.post('/projects', (req, res) => {
  const project = req.body;
  projects.push(project);
  res.status(201).send(project);
});

app.put('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(project => project.id === id);
  if (index !== -1) {
    projects[index] = req.body;
    res.send(projects[index]);
  } else {
    res.status(404).send({ message: 'Project not found' });
  }
});

app.get('/projects', (req, res) => {
  res.send(projects);
});

app.delete('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(project => project.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Project not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});