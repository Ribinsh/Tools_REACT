import axios from "axios";


const instance = axios.create({
    baseURL:'https://toool.arcticstore.ml/'
})

export default instance