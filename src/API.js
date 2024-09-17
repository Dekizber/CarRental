import axios from "axios";

export const mockAPI = axios.create({
    baseURL: 'https://66c73a9d732bf1b79fa5d101.mockapi.io/adverts'
})

export const paginParams = { page: 1, limit: 12 }
