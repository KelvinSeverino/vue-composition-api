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
    
}