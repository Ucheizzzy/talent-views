import { useState } from 'react'
import '../css/login.modules.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div className='login'>
            <form className='login-form'>
                <input type="email" placeholder="email" autoComplete="false" className="login-input" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" autoComplete="false" className="login-input" onChange={(e) => setPassword(e.target.value)} />
                <button className="login-button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login