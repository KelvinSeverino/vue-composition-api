import axios from 'axios'

export default class TodoService {
    
    //Metodo asincrono para requisicoes AJAX
    static async getAll() {
        return axios.get('/todos')
    }

    //Metodo asincrono para criar tarefa na API
    static async addTodo(params) {
        return axios.post('/todos', params)
    }
    
    //Metodo asincrono para editar tarefa na API
    static async editTodo(id, params) {
        return axios.put(`/todos/${id}`, params)
    }

    //Metodo asincrono para buscar tarefa na API
    static async getTodo(id) {
        return axios.get(`/todos/${id}`)
    }

    //Metodo asincrono para deletar tarefa na API
    static async deleteTodo(id) {
        return axios.delete(`/todos/${id}`)
    }
    
}