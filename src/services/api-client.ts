import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
    key:'79b8af4f254643f3b7e6b91c0f60911e'
    }
})