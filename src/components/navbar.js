import { ArrowDropDown, Notifications } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.modules.css'
import SearchBar from './searchBar'
import axios from 'axios'
import { AuthContext } from '../authContext/authContext'
import { logout } from '../authContext/authActions'
import { useHistory } from 'react-router-dom'


const Navbar = ({user}) => {
    const history = useHistory()

    const [isScrolled, setisScrolled] = useState(false);
    const [movie, setMovie] = useState([]);
    const {dispatch} = useContext(AuthContext)


    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    

    useEffect(() => {
      const getMovie = async () => {
          const res = await axios.get('/movies', {
              headers: {
                  token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
              }
          })
          setMovie(res.data)
        //   console.log(res.data)
      }
      getMovie()
  }, [])

  function setClicked() {
      dispatch(logout())
      history.push('/register')
  }
  

    return (
        <div className={isScrolled ? 'scrolled' : 'navbar'}>
            <div className="nav-container">
                <div className="nav-left">
                <Link to='/' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}}>
                    <span className="logo">talentcroft</span>
                    </Link>
                    <Link to='/' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}}>
                    <span>Homepage</span>
                    </Link>
                    <Link to='/series' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}}>
                        <span>Series</span>
                    </Link>
                    <Link to='/movies' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}}>
                        <span>Movies</span>
                    </Link>
                    <span>Popular</span>
                </div>
                <div className="nav-center">
                    <SearchBar className='search-bar' placeholder='Search for a show, movie, genre, etc.' data={movie}/>
                </div>
                <div className="nav-right">
                    <span>Riley</span>
                    <Notifications className='icon'/>
                    <img 
                    src="/profile-placeholder.png"  
                    alt="" 
                    />
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span onClick={setClicked}>Logout</span>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Navbar
