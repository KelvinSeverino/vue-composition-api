import axios from 'axios'

export default class TodoService {
    
    //Metodo asincrono para requisicoes AJAX
    static async getAll() {
        return axios.get('/todos')
    }
    
}