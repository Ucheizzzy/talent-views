import { useContext, 
    useEffect, 
    useState } from 'react'
import { login } from '../authContext/apicalls';
import { AuthContext } from '../authContext/authContext';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import axios from 'axios';
import '../css/login.modules.css'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [show, setShow] = useState(false)
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [random, setRandom] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const history = useNavigate()
    const { isFetching, error, dispatch } = useContext(AuthContext)


    const handleShowHide = () => {
        setShow(!show)
    }



    
    return (
        <div className='log-login' 
        style=
        {
            {backgroundImage: `url(https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)`}
            }
            >
            <div className="top-container">
                <div className="my-logo">
                    <span>talentcroft</span>
                </div>
            </div>
            <div className="form-container">
            <div className="log-container">
                <form className='log-form' action="/">
                    <h1 className="sign-in">Sign In</h1>
                        <input type="email" placeholder='Please input your email'/>
                        
                        <div className='input-password'>
                            <input type={show ? "text": "password"}  placeholder='Please input your password' />
                            {
                                show ? (
                                    <span className='visibility' onClick={handleShowHide}><Visibility /></span>
                                ) : (
                                    <span className='visibility' onClick={handleShowHide}><VisibilityOff /></span>
                                )
                            }
                        </div>

                        <button className="log-button" >Sign In</button>
                    <span className="signup-span">New to talentcroft views? Sign up <Link to='/register' 
                    style={{textDecoration: 'none', color: 'white'}}><b>here</b></Link></span>
                </form>
            </div>

        </div>
        </div>
    )
}

export default Login