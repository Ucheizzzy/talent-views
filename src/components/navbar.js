import { ArrowDropDown, Notifications, KeyboardArrowDownOutlined } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../css/navbar.modules.css'
import SearchBar from './searchBar'
import axios from 'axios'
import { AuthContext } from '../authContext/authContext'
import { logout } from '../authContext/authActions'
import { useNavigate } from 'react-router-dom'
import useDebounce from './debounce_hook/useDebounce'
// import useMediaQuery from 'react-responsive'
// import { useParams } from 'react-router-dom'
// import { Modal } from './modal'
// import { UserContext } from '../userContext/userContext'
// import { getUsers } from '../userContext/apiCalls'


const Navbar = ({ searchTerm, 
    // setSearchTerm, 
    // debouncedSearchTerm 
}) => {
    const history = useNavigate()

    // const params = useParams().id


    const debouncedSearch = useDebounce(searchTerm, 500)
    const [isScrolled, setisScrolled] = useState(false);
    const [movie, setMovie] = useState([]);
    const [user, setUser] = useState([])
    const {dispatch, user: userInfo} = useContext(AuthContext)

    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    useEffect(()=> {
        const getUser = async () => {
            const res = await axios.get(`/users/find/${userInfo._id}`, {
                headers: {
                    token: userInfo.accessToken
                }
            })
            setUser(res.data)
        }
        getUser()
    }, [userInfo._id, userInfo.accessToken])

    

    useEffect(() => {
      const getMovie = async () => {
          const res = await axios.get('/movies', {
              headers: {
                  token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
              }
          })
          setMovie(res.data)
      }
      getMovie()
  }, [])

  function setClicked() {
      dispatch(logout())
      history('/register')
  }

//   const handleFilter = (event) => {
//     event.preventDefault()
//     // if (debouncedSearch){
//         history(`/search?q=${debouncedSearch}`)
//         // setSearchParams({q: event.target.value})
//         setSearchTerm(event.target.value);
//     // }
    
// }
  

    return (
        <div className={isScrolled ? 'scrolled' : 'navbar'}>
            <div className="nav-container">
                <div className="nav-left">
                <Link to='/' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}}>
                    <span className="logo">talentcroft</span>
                    </Link>
                    {/* {userSetQuery ? ( */}

                    
                        <div className="dropdown">
                        <span style={{textDecoration: 'none', color: 'white', padding: '30px 0', marginLeft: '20px'}}><KeyboardArrowDownOutlined/></span>
                        <div className="dropdown-content">
                        <Link to='/' style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}} className='mennu'>
                        <p>Homepage</p>
                        </Link>
                        <Link to='/series' style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}} className='mennu'>
                        <p>Series</p>
                        </Link>
                        <Link to='/movies' style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}} className='mennu'>
                        <p>Movies</p>
                        </Link>
                        <Link to='/search' style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}} className='mennu'>
                        <p>Search</p>
                        </Link>
                        <p style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}}>Popular</p>
                        <Link to='/community' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                        <span>Community</span>
                        </Link>
                        {/* <SearchBar style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginLeft: '50px'}} className='search-bar' placeholder='Search for a show, movie, genre, etc.' 
                        data={movie}
                        /> */}
                        {/* <div className="search">
                            <input className="searchs-input" type="text" name="" placeholder="Search Movies, Directors, Descriptions." id=""
                            onChange={handleFilter}
                              />
                        </div> */}
                        </div>
                        </div>
                    {/* ) : (null)} */}
                    
                <div className="longbar">
                    <Link to='/' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                    <span>Homepage</span>
                    </Link>
                    <Link to='/series' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                        <span>Series</span>
                    </Link>
                    <Link to='/movies' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                        <span>Movies</span>
                    </Link>
                    <Link to='/search' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                        <p>Search</p>
                    </Link>
                        <span style={{textDecoration: 'none', color: 'white', padding: '10px 0', marginRight: '20px'}}>Popular</span>
                    <Link to='/community' style={{textDecoration: 'none', color: 'white', marginRight: '20px'}} className='mennu'>
                        <span>Community</span>
                    </Link>
                    </div>
                </div>
                <div className="nav-center">
                    {/* <SearchBar className='search-bar' placeholder='Search for a show, movie, genre, etc.' 
                    data={movie}
                    /> */}
                    {/* <div className="search">
                        <input className="searchs-input" type="text" name="" placeholder="Search Movies, Directors, Descriptions." id=""  
                        onChange={handleFilter} 
                        />
                    </div> */}
                </div>
                <div className="nav-right mennu" >
                    <Link to={`/profile/${user._id}`} style={{textDecoration: 'none', color: 'white'}}>
                    <span
                    className="hello"
                    >Hello 👋 {user.username}</span>
                    </Link>
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span className='drop-option'>Account</span>
                            <span className='drop-option'>Help Center</span>
                            <span className='drop-option' onClick={setClicked}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
