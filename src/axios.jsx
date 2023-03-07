import axios from "axios";


const instance = axios.create({
    baseURL:'https://toool.arcticstore.ml/'

    // baseURL:'http://localhost:3000/'
})

export default instance