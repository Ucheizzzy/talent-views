import React, { useContext, useState, useEffect } from 'react'
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn, Person, Create, People, DashboardOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import UploadList from '../components/uploadlist'
import '../css/community.modules.css'
import Post from '../components/post'
import axios from 'axios'
import Contentlist from '../components/contentlist'
import Footer from '../components/footer'
import VideoModal from '../components/videomodal'

const Community = () => {

    const [post, setPost] = useState([])
    const [show, setShow] = useState(false)

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
        <div className="community-container">
            
            <div className="community-header">
                <div className="community-bar">
                    <Link to="/dashboard" style={{textDecoration: 'none', color: 'white'}}>
                        <div className="top-logo">
                            <DashboardOutlined className='c-comp'/> Dashboard
                        </div>
                    </Link>
                    <Link to="/community" style={{textDecoration: 'none', color: 'white'}}>
                        <div className="top-logo">
                            <Home className='c-comp'/> Me
                        </div>
                    </Link>
                    <Link to="/community" style={{textDecoration: 'none', color: 'white'}}>
                        <div className="top-logo">
                            <Create className='c-comp'/> Upload Video
                        </div>
                    </Link>
                    <Link to="/community" style={{textDecoration: 'none', color: 'white'}}>
                        <div className="top-logo">
                            <People className='c-comp'/> Followers
                        </div>
                    </Link>
                </div>
            </div>
            <div className="premium-container">
                <span className="com-title">
                    Premium Videos
                </span>
                <div className="video-list">
                {
                post.map((video) => (
                <div key={video._id} >
                <Link 
                to={'/community/'} 
                onClick={(e)=>setShow(true)}
                style={{textDecoration: 'none', color: 'black'}}
                >
                <Post className='post' video={video} />
                </Link>
                {
                            show && (
                                <VideoModal closeModal={setShow} show={show} video={video} />
                            )
                        }
                
                </div>
                ))
                }
                </div>
            </div>
            <Footer />
        </div>
        
        </>
    )
}

export default Community
        