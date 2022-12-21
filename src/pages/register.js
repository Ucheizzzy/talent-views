import axios from 'axios'
import { 
    useEffect, 
    useRef, 
    useState 
} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/register.modules.css'

const Register = () => {


    
    return (
        <div className='login' 
        style={{backgroundImage: `url(https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)` }}
        >
            <div className="my-top-container">
            
                <div className="my-logo">
                    <span>talentcroft</span>
                </div>
                <div className="my-signin-button">
                    <Link to='/signin'>
                    <button className="my-button">
                        Sign in
                    </button>
                    </Link>
                </div>
            </div>
            <div className="sign-form-container">
            <div className="intro">
                <span>Watch unlimited content to your hearts <strong className='strong'> content...</strong></span>
            </div>
                        <p
                        style={{
                            color: 'red',
                        }}>Please input the correct email and try again!</p>

                </div>      
                    <div className='log-login-form'>
                            <input  type="text" required placeholder="Please input your username"  autoComplete="false"  className="log-login-input" />
                    <input  type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Please input your email"  autoComplete="false"  className="log-login-input" />

                    <input type="input" name='number' placeholder="Please input your phone number" autoComplete="false" className="log-login-input" />

                    <input type="password" name="password" placeholder="Please input your password" autoComplete="false" className="log-login-input" />

                    <input type="password" name='confirmPassword' placeholder="confirm Password" autoComplete="false" className="log-login-input" />
                        
                        <button className="logins-button" >Join Us!</button>
                    </div>
                </div>
        // </div>
    )
}

export default Register