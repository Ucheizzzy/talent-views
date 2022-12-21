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
// import Video from '../components/video'
import ProfileVideo from '../components/profileVideo'
import ProfilePostModal from '../components/profilePostModal'
import Media from "react-media"



const Profile = (match) => {
    const { user: currentUser } = useContext(AuthContext)
    const [ user, setUser ] = useState([])
    const [video, setVideo] = useState([])
    const [profilePicture, setProfilePicture] = useState([])
    const [hovered, setHovered] = useState(false)
    const [myPosts, setMyPosts] = useState([])
    const [show, setShow] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const {username} = useParams()
    const result = decodeURI(username)

    return(
        <>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="me-container">
                <div className="me-top">
                    <div className="me-left">
                        <div className="left-top">
                        <div className="me-profile-img" >
                            <img className="me-img" src={"../stockphoto.jpeg"} alt="" />    
                        </div>
                        <div className="me-profile-names">
                            <span className="me-name">Username</span>
                        </div>
                        </div>
                        <div className="left-bottom">
                        <div className="me-bottom">
                        <span className="bio">About</span>
                        </div>
                        </div>
                    </div>
                    <div className="me-right">
                        <div className="me-posts">
                           <div className="me-logo">
                               <InsertPhotoRoundedIcon/>
                           </div>
                           <div className="me-numbers">
                                <span className="large-number">
                                  0
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
                                   0
                                    </span>
                                <span className="small-caption">Followers</span>
                            </div> 
                        </div>
                        <div className="me-upvotes">
                           <div className="me-logo">
                               <ArrowCircleUpRoundedIcon />
                           </div>
                           <div className="me-numbers">
                                <span className="large-number">0</span>
                                <span className="small-caption">Upvotes</span>
                           </div> 
                        </div>
                    </div>
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

                <div className="me-posts-container">
                    <div className="me-many-posts">
                        <ProfileVideo />
                        <ProfileVideo />
                        <ProfileVideo />
                    </div>
                    <Routes >
                        <Route exact path="/:id" element={<ProfilePostModal />} />
                    </Routes >
                </div>
            </div>
        </>
    )
}

export default Profile