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

        if(response.status >= 400 && response.status <= 600) throw Error(await response.json());
        sessionStorage.setItem('token', response.headers.get("X-AUTH-TOKEN"))
        return await response.json()
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

        if(response.status >= 400 && response.status <= 600) throw Error(await response.json());
        return await response.json()
    }
}

const api = new API()

export default api