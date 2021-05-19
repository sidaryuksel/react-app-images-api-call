import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MH6ly9C_-WJw77mfjNNDj0pN9nq-k12AMvHyCIZ_nV4'
    }
})
