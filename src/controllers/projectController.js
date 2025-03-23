const Project = require('../models/project')

class ProjectController {
    static insert(req, res) {
        const { id, nome, descricao} = req.body

        const project = new Project(id, nome, descricao)
        project.save()

        res.status(201).json(project)
    }

    static findAll(req, res) {
        const projects = Project.fetchAll()

        res.json(projects)
    }

    static delete(req, res) {
        const { id } = req.params
        const deleted = Project.deleteById(id)

        if (deleted) {
            res.status(200).json({ message: 'Projeto deletado' })
        } else {
            res.status(404).json({ message: 'Projeto não encontrado' })
        }
    }

    static update(req, res) {
        const { id } = req.params
        const { nome, email, descricao} = req.body

        const updated = Project.updateById(id, { nome, descricao})

        if (updated) {
            res.status(200).json({ message: 'Projeto atualizado', project: updated })
        } else {
            res.status(404).json({ message: 'Projeto não encontrado' })
        }
    }
}

module.exports = ProjectController
