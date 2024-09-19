
import './index.scss'

export default function LoginPage() {

    let username = ''
    let password = ''

    function signIn() {
        if (username === 'uedsonreis' && password === '123456') {
            alert('Login realizado com sucess!')
        } else {
            alert('Usuário/senha inválido(a)')
        }
    }

    return (
        <div className='login-page'>
            <header>
                Página de Acesso
            </header>
            
            <main>
                <div>
                    <label htmlFor="username">Usuário:</label>
                    <input id="username" type="text" onChange={e => username = e.target.value } />
                </div>
                
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input id="password" type="password" onChange={e => password = e.target.value } />
                </div>
            </main>

            <footer>
                <button onClick={signIn}>Entrar</button>
            </footer>
        </div>
    )
}