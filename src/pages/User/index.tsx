import React from 'react'
import { useNavigate } from 'react-router-dom'

import { userService } from '../../services/user.service'
import { User } from '../../models/user'

import MyInput from '../../components/MyInput'

import './index.scss'

export default function UserPage() {

    const navigate = useNavigate()

    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    let confirmPass = ''

    function save() {
        if (name === null || name.trim() === '') {
            alert('Nome do usuário é obrigatório')
            return
        }
        if (username === null || username.trim() === '') {
            alert('Login do usuário é obrigatório')
            return
        }
        if (password === null || password.trim() === '') {
            alert('Senha do usuário é obrigatória')
            return
        }
        if (password !== confirmPass) {
            alert('Senha não confere')
            return
        }

        const user: User = { name, username, password }

        userService.create(user).then(saved => {
            alert('Usuário salvo com sucesso!')
            navigate(-1)
        }).catch((error: Error) => {
            if (error.cause === 400) {
                alert('Usuário já existe')
            } else {
                navigate('/login')
            }
        })
    }

    return (
        <div className='user-page'>
            <header>Novo Usuário</header>
            
            <main>
                <MyInput id='name' label='Nome' value={name} change={setName} />
                <MyInput id='username' label='Login' value={username} change={setUsername} />
                <MyInput id='password' label='Senha' type='password' change={setPassword} />
                <MyInput id='confirmPass' label='Confirmar Senha' type='password' change={value => confirmPass = value} />
            </main>

            <footer>
                <button onClick={save}>Salvar</button>
            </footer>
        </div>
    )
}