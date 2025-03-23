const Task = require('../models/task')

class TaskController {
    static insert(req, res) {
        const { id, titulo, status, userId, projectId} = req.body

        const task = new Task(id, titulo, status, userId, projectId)
        task.save()

        res.status(201).json(task)
    }

    static findAll(req, res) {
        const tasks = Task.fetchAll()

        res.json(tasks)
    }

    static delete(req, res) {
        const { id } = req.params
        const deleted = Task.deleteById(id)

        if (deleted) {
            res.status(200).json({ message: 'Tarefa deletada' })
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' })
        }
    }

    static update(req, res) {
        const { id } = req.params
        const { titulo, status, userId, projectId} = req.body

        const updated = Task.updateById(id, { titulo, status, userId, projectId})

        if (updated) {
            res.status(200).json({ message: 'Tarefa atualizada', task: updated })
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' })
        }
    }
}

module.exports = TaskController
