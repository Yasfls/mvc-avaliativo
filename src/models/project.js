const project = []

class Project {
    constructor(id, nome, descricao) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
    }

    save() {
        projects.push(this)
    }

    static fetchAll() {
        return projects
    }

    static deleteById(id) {
        const project = this.data.find(project => project.id === id)
        if (project !== -1) {
            this.data.splice(project, 1)
            return true
        }
        return false
    }

    static updateById(id, newData) {
        const project = this.data.find(project => project.id === id)
        if (project) {
            Object.assign(project, newData)
            return project
        }
        return null
    }
}

module.exports = Project