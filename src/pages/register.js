import axios from 'axios'
import { 
    useEffect, 
    useRef, 
    useState 
} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/register.modules.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [submitted, setSubmitted] = useState(false)
    // const [submitted2, setSubmitted2] = useState(false)
    const [random, setRandom] = useState([])

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneNumberRef = useRef();
    const confirmPasswordRef = useRef();
    const history = useNavigate()


    const handleFinish = async(e) => {
        e.preventDefault()

        if (
            phoneNumberRef.current.value && 
            emailRef.current.value &&
            nameRef.current.value &&
            passwordRef.current.value  &&
            confirmPasswordRef.current.value  &&
            confirmPasswordRef.current.value  === passwordRef.current.value

            ) {
                setName(nameRef.current.value)
                setEmail(emailRef.current.value)
                setPhoneNumber(phoneNumberRef.current.value) 
                setPassword(passwordRef.current.value)
                setConfirmPassword(confirmPasswordRef.current.value)
            }
            setSubmitted(true);
            
        
        const user = {
            username: nameRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value
        }
       
        try {
            await axios.post('auth/register', user)
            // history.push('/signin')
            history('/success')
        } catch (err) {
            console.log(err.message)
        }
        // console.log(password, phoneNumber, email, confirmPassword)
    }

    useEffect(() => {
        const getRandom = async () => {
            const res = await axios.get('/movies/random', {
                headers: {
                    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                }
            })
            setRandom(res.data[0].image[0])
            console.log(res.data)
        }
        getRandom()
    }, [])


    
    return (
        <div className='login' 
        style={{backgroundImage: `url(${random.image})` }}
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
            {/* {submitted &&
             (!emailRef.current.value || !usernameRef.current.value || !emailRef.current.value.includes('@'))
              ? (
                <p className="warning">Please input your username or password</p>
              ) : null} */}
            
                {/* { !email ? ( */}
                    <div>
                    { submitted && 
                        !emailRef.current.value.includes("@")? 
                        (<p
                        style={{
                            color: 'red',
                        }}>Please input the correct email and try again!</p>) : null}

</div>
                    <div className='log-login-form'>
                        {submitted && !nameRef.current.value ? (
                            <input 
                            type="text"
                            required
                            placeholder="Please input your username" 
                            autoComplete="false" 
                            className="log-login-input" 
                            ref={nameRef} />
                        ) : (
                            <input 
                            type="text"
                            required
                            placeholder="Your username" 
                            autoComplete="false" 
                            className="log-login-input" 
                            ref={nameRef} />
                        )}

                        { submitted && !emailRef.current.value ? 
                    (<input 
                    type="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    placeholder="Please input your email" 
                    autoComplete="false" 
                    className="log-login-input" 
                    ref={emailRef} />) :
                (<input 
                type="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="Your email" 
                autoComplete="false" 
                className="log-login-input" 
                ref={emailRef} />)}


                        { submitted && 
                        !phoneNumberRef.current.value ?
                    (<input type="input" name='number' placeholder="Please input your phone number" autoComplete="false" className="log-login-input" ref={phoneNumberRef} />) : 
                    (<input type="input" name='number' placeholder="Your phone number" autoComplete="false" className="log-login-input" ref={phoneNumberRef} />)}

                        {submitted && !passwordRef.current.value ? 
                        (<input type="password" name="password" placeholder="Please input your password" autoComplete="false" className="log-login-input" ref={passwordRef} />) :
                        submitted && confirmPasswordRef.current.value !== passwordRef.current.value ? 
                        (<input type="text" name="password" value="Input the correct password" autoComplete="false" className="log-login-input" ref={passwordRef} />) :
                        (<input type="password" name="password" placeholder="Your password" autoComplete="false" className="log-login-input" ref={passwordRef} />)}

                        <input type="password" name='confirmPassword' placeholder="confirm Password" autoComplete="false" className="log-login-input" ref={confirmPasswordRef} />
                        
                        <button className="logins-button" onClick={handleFinish}>Join Us!</button>
                    </div>
                </div>
        </div>
    )
}

export default Register