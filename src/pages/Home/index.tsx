import React from 'react'
import { useNavigate } from 'react-router-dom'

import { userService } from '../../services/user.service'
import HeaderButton from '../../components/HeaderButton'
import { User } from '../../models/user'

import './styles.scss'

export default function HomePage() {

    const navigate = useNavigate()

    const [users, setUsers] = React.useState<User[]>([])

    React.useEffect(() => {
        userService.getUsers()
            .then(list => setUsers(list))
            .catch(error => navigate('/login'))
    }, [])

    function goToCreateUser() {
        navigate('/user/create')
    }

    return (
        <div className='page-home'>
            <header>
                <HeaderButton text='Sair' click={() => {}} />

                Usuários Cadastrados

                <HeaderButton text="Novo" click={goToCreateUser} />
            </header>

            <main>
                { users.map(user => (
                    <div key={user.username} className='list-item'>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <div>Editar | Delete</div>
                    </div>
                ))}
            </main>

        </div>
    )
}