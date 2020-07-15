import {BASE_URL} from "../config/config";

class API {
    constructor() {
        this.url = BASE_URL
    }

    async login(user) {
        if (!user) return
        const response = await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        const parsedJson = await response.json()
        if(response.status >= 400 && response.status <= 600) throw Error(parsedJson.message);
        return parsedJson
    }

    async getUserInfo() {
        const token = sessionStorage.getItem("token")
        if(!token) return
        const response = await fetch(`${this.url}/user/info`, {
            method: 'POST',
            headers: {
                'X-AUTH-TOKEN': token,
                'Content-Type': 'application/json',
            }
        })
        const parsedJson = await response.json()
        if(response.status >= 400 && response.status <= 600) throw Error(parsedJson.message);
        return parsedJson
    }

    async getWindmillsByUser() {
        const token = sessionStorage.getItem("token")
        if(!token) return
        const response = await fetch(`${this.url}/windmills/user/get`, {
            method: 'POST',
            headers: {
                'X-AUTH-TOKEN': token,
                'Content-Type': 'application/json',
            }
        })
        const parsedJson = await response.json()
        if(response.status >= 400 && response.status <= 600) throw Error(parsedJson.message);
        return await parsedJson
    }

    async registerUser(data) {
        const response = await fetch(`${this.url}/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const parsedJson = await response.json()
        if(response.status >= 400 && response.status <= 600) throw Error(parsedJson.message);
        return await parsedJson
    }
}

const api = new API()

export default api