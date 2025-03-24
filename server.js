const express = require('express');
const app = express();
const port = 3000;

const Task = require('./task');
const Project = require('./project');
const User = require('./user');

app.use(express.json());

// Rotas para tarefas (tasks)
app.post('/task', (req, res) => {
  const { id, titulo, status, userId, projectId } = req.body;
  const task = new Task(id, titulo, status, userId, projectId);
  task.save();
  res.status(201).send(task);
});

app.put('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask = Task.updateById(id, req.body);
  if (updatedTask) {
    res.send(updatedTask);
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});

app.get('/task', (req, res) => {
  res.send(Task.fetchAll());
});

app.delete('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const success = Task.deleteById(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});

// Rotas para usuários (users)
app.post('/user', (req, res) => {
  const { id, nome, email, senha } = req.body;
  const user = new User(id, nome, email, senha);
  user.save();
  res.status(201).send(user);
});

app.put('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = User.updateById(id, req.body);
  if (updatedUser) {
    res.send(updatedUser);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

app.get('/user', (req, res) => {
  res.send(User.fetchAll());
});

app.delete('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const success = User.deleteById(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

// Rotas para projetos (projects)
app.post('/project', (req, res) => {
  const { id, nome, descricao } = req.body;
  const project = new Project(id, nome, descricao);
  project.save();
  res.status(201).send(project);
});

app.put('/project/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedProject = Project.updateById(id, req.body);
  if (updatedProject) {
    res.send(updatedProject);
  } else {
    res.status(404).send({ message: 'Project not found' });
  }
});

app.get('/project', (req, res) => {
  res.send(Project.fetchAll());
});

app.delete('/project/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const success = Project.deleteById(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Project not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});