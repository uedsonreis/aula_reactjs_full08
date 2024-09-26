import { User } from "../models/user"
import { getLoggedUser } from './auth.service'

class UserService {

    private url = 'http://localhost:3030/users'

    public async getUsers() {
    
        const logged = getLoggedUser()
        if (!logged) new Error('Token Inválido!')
    
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${logged?.token}`
            }
        })
    
        if (response.status === 200) {
            const users: User[] = await response.json()
            return users
        }
    
        return new Error('Erro no servidor, token inválido')
    }

    // get - pegar um único usuário

    // post - criar um usuário

    // put - editar um usuário

    // delete - remover um usuário
}

export const userService = new UserService()