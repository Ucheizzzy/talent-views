import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../css/register.modules.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUserName] = useState('')
    const [surname, setSurname] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [submitted2, setSubmitted2] = useState(false)
    const [random, setRandom] = useState([])

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const surnameRef = useRef();
    const confirmPasswordRef = useRef();
    const history = useHistory()

    const handleStart = () => {
        if (
            usernameRef.current.value && 
            surnameRef.current.value && 
            emailRef.current.value
            ){
            setEmail(emailRef.current.value)
            setUserName(usernameRef.current.value)  
            setSurname(surnameRef.current.value) 
            
        }
        setSubmitted(true)
             
            

            if (emailRef.current.value.includes('@')){
                console.log(true)
            } else {
            console.log(false)
        }

            console.log(usernameRef.current.value, surnameRef.current.value, emailRef.current.value)
        
    }
    

    const handleFinish = async(e) => {
        e.preventDefault()

        if (
            passwordRef.current.value  &&
            confirmPasswordRef.current.value  &&
            confirmPasswordRef.current.value  === passwordRef.current.value

            ) {
                setPassword(passwordRef.current.value)
                setConfirmPassword(confirmPasswordRef.current.value)
            }
            setSubmitted2(true);
            
        
        const user = {
            username: username,
            surname: surname,
            email: email,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }
       
        try {
            await axios.post('auth/register', user, {email}, {surname}, {username} )
            history.push('/signin')
        } catch (err) {
            console.log(err.message)
        }
        console.log(password, username, email, confirmPassword)
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
        <div className='login' style={{backgroundImage: `url(${random})`}}>
            <div className="top-container">
            
                <div className="my-logo">
                    <span>talentcroft</span>
                </div>
                <div className="signin-button">
                    <Link to='/signin'>
                    <button className="button">
                        Sign in
                    </button>
                    </Link>
                </div>
            </div>
            <div className="sign-form-container">
            <div className="intro">
                <span>Watch unlimited content to your hearts <strong className='strong'> content...</strong></span>
            </div>
            {/* {submitted &&
             (!emailRef.current.value || !usernameRef.current.value || !emailRef.current.value.includes('@'))
              ? (
                <p className="warning">Please input your username or password</p>
              ) : null} */}
            
                { !email ? (
                    <div className='log-login-form'>
                        { submitted &&
                        !emailRef.current.value.includes('@') ?
                    (<input type="email"
                    required
                    placeholder="Please input your email" 
                    autoComplete="false" 
                    className="log-login-input" 
                    ref={emailRef} />) :
                (<input type="email"
                required
                placeholder="Your Email" 
                autoComplete="false" 
                className="log-login-input" 
                ref={emailRef} />)}
                        

                        { submitted && 
                        !usernameRef.current.value ?
                    (<input type="input" name='username' placeholder="Please input your Name" autoComplete="false" className="log-login-input" ref={usernameRef} />) : 
                    (<input type="input" name='username' placeholder="Your Name" autoComplete="false" className="log-login-input" ref={usernameRef} />)}

                        { submitted && 
                        !surnameRef.current.value ?
                    (<input type="input" name='surname' placeholder="Please input your Last Name" autoComplete="false" className="log-login-input" ref={surnameRef} />) : 
                    (<input type="input" name='surname' placeholder="Your Last Name" autoComplete="false" className="log-login-input" ref={surnameRef} />)}
                        
                        <button className="login-button" onClick={handleStart}>Join Us!</button>
                    </div>
                ) : (
                    <>
                    <form className='log-login-form'>
                        <input type="password" name='password' placeholder="Password" autoComplete="false" className="log-login-input" ref={passwordRef} />
                        <input type="password" name='confirmPassword' placeholder="confirm Password" autoComplete="false" className="log-login-input" ref={confirmPasswordRef} />

                        <button className="login-button"  onClick={handleFinish}>Let's Begin</button>
                    </form>
                    <div>
                    { submitted2 && 
                        confirmPasswordRef.current.value !== passwordRef.current.value ? 
                        (<span
                        style={{
                            color: '#fff',
                        }}>Please input the correct Password!!!</span>) : null}

                    </div>
                    </>
                )}
                </div>
        </div>
    )
}

export default Register