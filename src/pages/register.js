import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import '../css/register.modules.css'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const required = (value) => {
  if (!value) {
    return (
      <div className='labels' role='alert'>
        This field is required!
      </div>
    )
  }
}

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='labels' role='alert'>
        This is not a valid email.
      </div>
    )
  }
}

const number = (value) => {
  if ((value.length < 11) & (typeof value.length === Number)) {
    return (
      <div className='labels' role='alert'>
        This is not a valid number.
      </div>
    )
  }
}

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='labels' role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6) {
    return (
      <div className='labels' role='alert'>
        The password must not be less than 6 characters.
      </div>
    )
  }
}

const Register = () => {
  let navigate = useNavigate()
  const form = useRef()
  const checkBtn = useRef()
  const [errMessage, setErrMessage] = useState('')
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [first_name, setFirstname] = useState('')
  const [last_name, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [successful, setSuccessful] = useState(false)

  // const { message } = useSelector(state => state.message);
  // const dispatch = useDispatch();

  const onChangeFirstname = (e) => {
    const firstname = e.target.value
    setFirstname(firstname)
  }

  const onChangeLastname = (e) => {
    const lastname = e.target.value
    setLastname(lastname)
  }

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangeNumber = (e) => {
    const phone_number = e.target.value
    setPhoneNumber(phone_number)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const onChangeConfirmPassword = (e) => {
    const confirmpassword = e.target.value
    setConfirmPassword(confirmpassword)
  }

  const handleShowHide = () => {
    setShow(!show)
  }

  const handleShowHide1 = () => {
    setOpen(!open)
  }

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   console.log(first_name, last_name, email, password, phone_number)
  //   setSuccessful(false);

  //   form.current.validateAll();

  // if (password !== confirmpassword) setErrMessage("Password does not match!")

  // if (checkBtn.current.context._errors.length === 0 && password === confirmpassword) {
  //     dispatch(register(first_name, last_name, email, phone_number, password))
  //       .then(() => {
  //         navigate("/success");
  //         window.location.reload();
  //         setSuccessful(true);
  //       })
  //       .catch((error) => {
  //         setSuccessful(false);
  //       });
  //   }
  // };

  return (
    <div
      className='login'
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1818&q=80)`,
      }}
    >
      <div className='my-top-container'>
        <div className='my-logo'>
          <span>talentcroft</span>
        </div>
        <div className='my-signin-button'>
          <Link to='/signin'>
            <button className='my-button'>Sign in</button>
          </Link>
        </div>
      </div>
      <div className='sign-form-container'>
        <div className='intro'>
          <span>
            Watch unlimited content to your hearts{' '}
            <strong className='strong'> content...</strong>
          </span>

          <Form
            // onSubmit={handleRegister}
            className='form'
            ref={form}
          >
            {/* {!successful && ( */}
            <div>
              {/* {message && ( */}
              <div className='form-group'>
                <div
                  className={
                    successful ? 'alert alert-success' : 'alert alert-danger'
                  }
                  role='alert'
                >
                  {/* {message} */}
                </div>
              </div>
              {/* // )} */}
              <CheckButton style={{ display: 'none' }} ref={checkBtn} />
              <div className='form-group'>
                <label htmlFor='username' className='labels'>
                  First Name
                </label>
                <Input
                  type='text'
                  className='form-control'
                  placeholder='Please input your firstname'
                  name='first_name'
                  value={first_name}
                  onChange={onChangeFirstname}
                  validations={[required, vusername]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='username' className='labels'>
                  Last Name
                </label>
                <Input
                  type='text'
                  className='form-control'
                  placeholder='Please input your lastname'
                  name='last_name'
                  value={last_name}
                  onChange={onChangeLastname}
                  validations={[required, vusername]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email' className='labels'>
                  Email
                </label>
                <Input
                  type='text'
                  className='form-control'
                  placeholder='Please input your email'
                  name='email'
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email' className='labels'>
                  Phone Number
                </label>
                <Input
                  type='number'
                  className='form-control'
                  placeholder='Please input your email'
                  name='phone_number'
                  value={phone_number}
                  onChange={onChangeNumber}
                  validations={[required, number]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password' className='labels'>
                  Password
                </label>
                <Input
                  type={open ? 'text' : 'password'}
                  className='form-control'
                  name='password'
                  placeholder='Please input your password'
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
                {errMessage && (
                  <div className='form-group'>
                    <div
                      className={
                        successful
                          ? 'alert alert-success'
                          : 'alert alert-danger'
                      }
                      role='alert'
                    >
                      {errMessage}
                    </div>
                  </div>
                )}
                {open ? (
                  <span className='visibility' onClick={handleShowHide1}>
                    <Visibility />
                  </span>
                ) : (
                  <span className='visibility' onClick={handleShowHide1}>
                    <VisibilityOff />
                  </span>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='password' className='labels'>
                  Confirm Password
                </label>
                <Input
                  type={show ? 'text' : 'password'}
                  className='form-control'
                  name='confirmpassword'
                  placeholder='Please confirm your password'
                  value={confirmpassword}
                  onChange={onChangeConfirmPassword}
                  validations={[required, vpassword]}
                />
                {errMessage && (
                  <div className='form-group'>
                    <div
                      className={
                        successful
                          ? 'alert alert-success'
                          : 'alert alert-danger'
                      }
                      role='alert'
                    >
                      {errMessage}
                    </div>
                  </div>
                )}
                {show ? (
                  <span className='visibility' onClick={handleShowHide}>
                    <Visibility />
                  </span>
                ) : (
                  <span className='visibility' onClick={handleShowHide}>
                    <VisibilityOff />
                  </span>
                )}
              </div>

              <div className='form-group'>
                <button className='logins-button'>Join Us!</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register
