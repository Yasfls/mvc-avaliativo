const user = []

class User {
    constructor(id, nome, email, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    save() {
        users.push(this)
    }

    static fetchAll() {
        return users
    }

    static deleteById(id) {
        const index = this.data.findIndex(user => user.id === id)
        if (index !== -1) {
            this.data.splice(index, 1)
            return true
        }
        return false
    }

    static updateById(id, newData) {
        const user = this.data.find(user => user.id === id)
        if (user) {
            Object.assign(user, newData)
            return user
        }
        return null
    }
}

module.exports = User