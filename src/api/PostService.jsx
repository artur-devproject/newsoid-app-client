import axios from "axios"

export default class PostService {
    static async getPosts(date) {
        return await axios.get('http://localhost:5000/posts', {
            params: {
                _date: date
            }
        })
    }

    static async getSources() {
        return await axios.get('http://localhost:5000/sources')
    }
}