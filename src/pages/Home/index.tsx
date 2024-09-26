
import { userService } from '../../services/user.service'

export default function HomePage() {

    userService.getUsers().then(list => {
        console.log(list)
    })

    return (
        <div>
            <header>Usuários Cadastrados</header>

            <main>

            </main>

        </div>
    )
}