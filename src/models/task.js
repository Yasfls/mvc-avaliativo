let tasks = [];

class Task {
    constructor(id, titulo, status, userId, projectId) {
        this.id = id;
        this.titulo = titulo;
        this.status = status;
        this.userId = userId;
        this.projectId = projectId;
    }

    save() {
        tasks.push(this);
    }

    static fetchAll() {
        return tasks;
    }

    static deleteById(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    static updateById(id, newData) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            Object.assign(task, newData);
            return task;
        }
        return null;
    }
}

module.exports = Task;