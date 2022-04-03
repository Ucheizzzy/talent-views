import '../css/profile.modules.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useParams, Routes, Route  } from 'react-router-dom'
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { ArrowDropDown, DashboardOutlined, LocationOn } from '@material-ui/icons'
import Navbar from '../components/navbar';
import { AuthContext } from '../authContext/authContext';
import Video from '../components/video'
import Footer from '../components/footer';
import PostModal from '../components/postModal'
import ProfileModal from '../components/profileModal'


const Profile = () => {
    const { user: currentUser } = useContext(AuthContext)
    const [ user, setUser ] = useState([])
    const [video, setVideo] = useState([])
    const [profilePicture, setProfilePicture] = useState([])
    const [hovered, setHovered] = useState(false)
    const [show, setShow] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/find/${id}`);
            setUser(res.data)
            setProfilePicture(res.data.profilePicture[0])
            window.scrollTo(0, 0);
        }
        fetchUser();
    }, [id])

    useEffect(() => {
        const getMyVideo = async() => {
            const res = await axios.get(`posts/user/${user.email}`)
            setVideo(res.data);
            window.scrollTo(0, 0);
        }
        getMyVideo()
    }, [user.email])

    console.log(currentUser.email)
    console.log(user.email)

    const handleHover = () => {
        if (currentUser.email === user.email) {
            setHovered(true)
        } else if (currentUser.email !== user.email){
            setHovered(false)
        }
    }

    const handleOut = () => {
        setHovered(false)
    }

    return(
        <>
        <Navbar />
        {
                            show && (
                                <ProfileModal
                                //  post={post} 
                                profilePicture={profilePicture}
                                 closeModal={setShow} show={show}/>
                            )
                        }
            <div className="me-container">
                <div className="me-top">
                    <div className="me-left">
                        <div className="me-profile-img" >
                        {
                            currentUser && hovered ? (
                                <div className="me-img-container-s"
                                onMouseEnter={handleHover} 
                                onMouseLeave={handleOut}
                                onClick={(e)=>setShow(true)}
                                >
                            <img className="me-img" src={profilePicture?.profilePicture || "../stockphoto.jpeg"} alt="" 
                            />
                            <span className="blur"></span>
                            <span className="blur-words">
                                Edit
                            </span>
                        </div>
                                ) : (
                                <img className="me-img" src={profilePicture?.profilePicture || "../stockphoto.jpeg"} alt="" 
                                onMouseEnter={handleHover} 
                                onMouseLeave={handleOut}
                                />    
                            )
                        }
                        </div>
                        <div className="me-profile-names">
                            <span className="me-name">{user.username}</span>
                            <span className="me-email">
                                {user.email}
                                </span>
                        </div>
                    </div>
                    <div className="me-right">
                        <div className="me-posts">
                           <div className="me-logo">
                               <InsertPhotoRoundedIcon/>
                           </div>
                           <div className="me-numbers">
                                <span className="large-number">
                                    { video?.length}
                                </span>
                                <span className="small-caption">Posts</span>
                           </div>                         
                        </div>
                        <div className="me-followers">
                           <div className="me-logo">
                               <PeopleRoundedIcon />
                           </div>
                           <div className="me-numbers">
                                <span className="large-number">
                                    {user.followers?.length}
                                    </span>
                                <span className="small-caption">Followers</span>
                            </div> 
                        </div>
                        <div className="me-upvotes">
                           <div className="me-logo">
                               <ArrowCircleUpRoundedIcon />
                           </div>
                           <div className="me-numbers">
                                <span className="large-number">1k</span>
                                <span className="small-caption">Upvotes</span>
                           </div> 
                        </div>
                    </div>
                </div>
                <div className="me-bottom">
                        <span className="bio">{user.about}</span>
                    </div>
                <div className="community-heade-r" >
                <div className="community-bar">
                    <Link to="/timeline" style={{textDecoration: 'none', color: 'white'}}>
                        <div className="top-logo">
                            <DashboardOutlined className='c-comp'/> Timeline
                        </div>
                    </Link>
                    <Link to="/community" style={{textDecoration: 'none', color: 'white'}}>
                        <div className="top-logo">
                            <LocationOn className='c-comp'/> Community
                        </div>
                    </Link>
                </div>
            </div>
                <div className="analytics-overview-container">
                    <div className="analytics-overview">
                        <span className="analytics">
                            Analytics Overview
                        </span>
                    </div>
                    <div className="ana-dropdown-button">
                    <div className="custom-select">
                        <select className="select">
                            <option value="0">The Last Week</option>
                            <option value="1">The Last 30 Days</option>
                            <option value="2">The Last 6 Months</option>
                            <option value="3">The Last Year</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="me-data-container">
                    <div className="me-data">
                        <div className="card">
                            <span className="card-title">
                                2k
                            </span>
                            <span className="card-subtitle">
                                Followers Gained in the past week
                            </span>
                        </div>
                    </div>
                    <div className="me-data">
                    <div className="card">
                            <span className="card-title">
                                2
                            </span>
                            <span className="card-subtitle">
                                Posts made in the past week
                            </span>
                        </div>
                    </div>
                    <div className="me-data">
                    <div className="card">
                            <span className="card-title">
                                300
                            </span>
                            <span className="card-subtitle">
                                Upvotes Gained in the past week
                            </span>
                        </div>
                    </div>
                    <div className="me-data">
                    <div className="card">
                            <span className="card-title">
                                20
                            </span>
                            <span className="card-subtitle">
                                Likes had in the past week
                            </span>
                        </div>
                    </div>
                </div>
                <div className="me-posts-container">
                    <div className="me-titles">
                    <span className="my-posts">
                        My Videos
                    </span>
                    <span className="line">
                        
                    </span>
                    </div>
                    <div className="me-many-posts">
                        {video.map((video)=> (
                            <Link to={`/profile/${user._id}/${video._id}`}>
                            <div key={video._id} className="me-content-container">
                                 <Video video={video} />
                            </div>
                            </Link>
                        ))}
                    </div>
                    <Routes >
                        <Route exact path="/:id" element={<PostModal />}/>
                    </Routes >
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile