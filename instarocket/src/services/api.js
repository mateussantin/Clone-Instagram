import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.3.2:3333'
    //http://10.0.3.2:3333 = localhost ou usar o endereço de IP do computador
})

export default api;