import React, { useContext, useState, useEffect } from 'react'
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn, Person, Create, People, DashboardOutlined } from '@material-ui/icons'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import PostModal from '../components/postModal'
import UploadList from '../components/uploadlist'
import '../css/community.modules.css'
import Post from '../components/post'
import axios from 'axios'
import Contentlist from '../components/contentlist'
import Footer from '../components/footer'
import VideoModal from '../components/videomodal'
import Video from '../components/video'
import Modal from 'react-modal'
import Fullpost from '../components/fullpost'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '../authContext/authContext'

Modal.setAppElement('#root')

const Community = () => {

    const [post, setPost] = useState([])
    const {user} = useContext(AuthContext)
    // const [show, setShow] = useState(false)
    // const [isOpen, setIsOpen] = useState(false)

    useEffect(()=> {
        const getPosts = async () => {
            const res = await axios.get('/posts')
            setPost(res.data.data)
            console.log(res.data.data)
        }
        getPosts()
    }, [])


    return(
        <>
        <Navbar />
        <div className="community-container" >
            
            <div className="community-header" >
                <div className="community-bar">
                    <Link to="/timeline" >
                        <div className="top-logo">
                            <DashboardOutlined className='c-comp'/> Timeline
                        </div>
                    </Link>
                    <Link to={`/profile/${user._id}`}>
                        <div className="top-logo">
                            <Home className='c-comp'/> Me
                        </div>
                    </Link>
                </div>
            </div>
            <div className="premium-container" >
                <div className="video-list" >
                {
                post.map((video, index) => (
                <div className="video-link" key={video._id}
                // onClick={(e)=>setShow(true)} 
                >
                
                    <Link to={{pathname:`/community/${video._id}`, post: video}}> 
                        {/* <Link to={`/community/`}> */}
                            <Video video={video} />
                    </Link>
                </div>
                ))
                }
                </div>
            </div>


        <Routes >
            <Route exact path="/:id" element={<PostModal post={post} />}/>
        </Routes >

            
            
        </div>
        <Footer />
        </>
    )
}

export default Community
        