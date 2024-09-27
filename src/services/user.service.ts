import { User } from "../models/user"
import { getLoggedUser } from './auth.service'

class UserService {

    private url = 'http://localhost:3030/users'

    private getHeaders() {
        const logged = getLoggedUser()
        if (!logged) new Error('Token Inválido!')

        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${logged?.token}`
        } as HeadersInit
    }

    private async getData(response: Response) {
        if (response.status >= 200 && response.status < 300) {
            return await response.json()
        }
        throw new Error(response.statusText, { cause: response.status })
    }

    public async getUsers() {
        const response = await fetch(this.url, {
            method: 'GET',
            headers: this.getHeaders()
        })
        return await this.getData(response) as User[]
    }

    // get - pegar um único usuário

    public async create(user: User) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(user)
        })
        return await this.getData(response) as User
    }

    // put - editar um usuário

    // delete - remover um usuário
}

export const userService = new UserService()