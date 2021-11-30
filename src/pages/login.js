import { useContext, useEffect, useRef, useState } from 'react'
import { login } from '../authContext/apicalls';
import { AuthContext } from '../authContext/authContext';
import axios from 'axios';
import '../css/login.modules.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [random, setRandom] = useState([])
    const { dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        login({email, password}, dispatch)
    }


    useEffect(() => {
        const getRandom = async () => {
            const res = await axios.get('/movies/random', {
                headers: {
                    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
                }
            })
            setRandom(res.data[0].image[0])
            console.log(res.data[0])
        }
        getRandom()
    }, [])



    
    return (
        <div className='log-login' style={{backgroundImage: `url(${random})`}}>
            <div className="top-container">
                <div className="my-logo">
                    <span>talentcroft</span>
                </div>
            </div>
            <div className="form-container">
            <div className="log-container">
                <form className='log-form' action="/">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='email or phone number...' onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                    <button className="log-button" onClick={handleClick}>Sign In</button>
                    <span>New to talentcroft views? Sign up <Link to='/register' 
                    style={{textDecoration: 'none', color: 'white'}}><b>here</b></Link></span>
                </form>
            </div>

        </div>
        </div>
    )
}

export default Login