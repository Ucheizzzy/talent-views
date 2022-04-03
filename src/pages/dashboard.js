import React, { useContext, useState, useEffect } from 'react'
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn, Person, Create, People} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import '../css/dashboard.modules.css'
import Post from '../components/post'
import axios from 'axios'
import Footer from '../components/footer'
import Modal from '../components/modal'
import { AuthContext } from '../authContext/authContext'

const Dashboard = () => {

    const [show, setShow] = useState(false)
    const [post, setPost] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=> {
        const getPosts = async () => {
            const res = await axios.get('/posts/timeline/' + user._id)
            console.log(res.data)
            setPost(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt)
            }))
            window.scrollTo(0, 0);
        }
        getPosts()
    }, [])

    useEffect(() => {
        
    })


    return(
        <>
        <div className='dash-app'>
        <Navbar />
        <div className="dash-timeline">
        <div className="side-bar">
                <div className="side-content-container">
                    <Link to={`/profile/${user._id}`}>
                        <div className="side-log-o" style={{textDecoration: 'none', color: 'white', margin: '20px 0'}}>
                            <Home className='comp'/> Me
                        </div>
                    </Link>
                    <Link to="/community">
                        <div className="side-log-o" style={{textDecoration: 'none', color: 'white', margin: '20px 0'}}>
                            <LocationOn className='comp'/> Community
                        </div>
                    </Link>
                        
                        <div className="side-log-o" onClick={()=>setShow(true)} style={{textDecoration: 'none', color: 'white', margin: '20px 0'}} >
                            <Create className='comp' /> Upload Video
                        </div>
                        
                        

                    {/* <Link to="/community" style={{textDecoration: 'none', color: 'white'}}> */}
                        <div className="side-log-o" style={{textDecoration: 'none', color: 'white', margin: '20px 0'}}>
                            <People className='comp'/> Followers
                        </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="dashboard-container">
            
                <div className="timeline-container">
            {
                post.map((video) => (
                <div key={video._id}>
                <Post className='post' video={video}/>
                </div>
                ))
            }

           
                </div>
            </div>
            
            
                        {
                            show && (
                                <Modal post={post} closeModal={setShow} show={show}/>
                            )
                        }
        </div>
        </div>
        
        </>
        
    )

}

export default Dashboard

