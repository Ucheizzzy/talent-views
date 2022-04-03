import React, { Suspense, useContext, useState, useEffect } from 'react'
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn } from '@material-ui/icons'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ReactPlayer from 'react-player'
// import { Link } from 'react-router-dom'
// import Navbar from '../components/navbar'
import '../css/video.modules.css'
import { AuthContext } from '../authContext/authContext'
import axios from 'axios'
// import film from '../images/gif.gif'

const Video = ({video}) => {

    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isUpvoted, setIsUpvoted] = useState(false)
    const [upvote, setUpvote] = useState(video.upvotes?.length)
    const [like, setLike] = useState(video.likes?.length)
    const { user:currentUser, dispatch } = useContext(AuthContext)
    // const [play, setPlay] = (false)

    useEffect(() => {
        setIsLiked(video.likes?.includes(currentUser._id))
    }, [currentUser._id, video.likes])

    useEffect(() => {
        setIsLiked(video.upvotes?.includes(currentUser._id))
    }, [currentUser._id, video.upvotes])

    const handleLike = async () => {
        try {
            await axios.put(`/posts/${video._id}/like`, {
                userId: currentUser._id,
            })
            if(!isLiked && video.likes.includes(currentUser._id)){
                setClick(true)
                setLike(like + 1)
            }
            if(isLiked && video.likes.includes(currentUser._id)){
                setClick(false) 
                setLike(like - 1)
            } 
            window.location.reload()
            setClick(true)
            setIsLiked(!isLiked)
            
        } catch (err) {
            console.log(err)
        }
    
}

const handleUpvote = async () => {
    try {
        await axios.put(`/posts/${video._id}/upvote`, {
            userId: currentUser._id,
        })
        if(!isUpvoted){
            setUpvote(upvote + 1)
        }
        if(isUpvoted){
            setUpvote(upvote - 1)
        } 
        window.location.reload()
        setIsUpvoted(!isUpvoted)          
    } catch (err) {
        console.log(err)
    }

}

    return(
        <>
                <div className="timeline-posts">
                    <div className="post-container"
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    >
                        <div className="post-imag-e">
                            {!hover ? (
                                <video className="post-imager-y" 
                                src={video.video[0]?.video} 
                                alt="new" 
                                type="video/mp4" 
                                muted
                                // poster={film}
                                />
                            ) : (
                                <video className="post-imager-y" 
                                src={video.video[0]?.video} 
                                alt="new" 
                                type="video/mp4" 
                                controls/>
                            )}
                            {!hover ? (
                            <div style={{display: 'none'}}>
                            <div className="fullpost-social" style={{
                                position: "absolute", 
                                left: '0%',
                                top: '130px', 
                                backgroundColor:'#0000008a'
                                }}>
                                {
                            !click ? (
                                <FavoriteBorder style={{fontSize:"20px", margin: "0 10px"}} onClick={handleLike}/>
                            ) : (
                                <Favorite style={{fontSize:"20px", margin: "0 10px", color: 'red'}} onClick={handleLike}/>
                            )
                            }
                                <span className="likes" style={{fontSize:"20px", margin: "0 10px"}}>
                                    {video.likes?.length}
                                </span>
                            </div>
                            <div className="fullpost-social" style={{
                                position: "absolute", 
                                left: '0%', 
                                bottom: '130px',
                                backgroundColor:'#0000008a'
                            }}>
                                <ArrowCircleUpIcon style={{fontSize:"20px", margin: "0 10px"}} onClick={handleUpvote}/>
                                <span className="upvotes" style={{fontSize:"20px", margin: "0 10px"}}>
                                {video.upvotes?.length}
                                </span>
                            </div>
                            </div>  
                            ) : (
                                <>
                                <div className="fullpost-social" style={{
                                    position: "absolute", 
                                    left: '0%',
                                    top: '130px', 
                                    backgroundColor:'#0000008a'
                                    }}>
                                    {
                                !click ? (
                                    <FavoriteBorder style={{fontSize:"20px", margin: "0 10px"}} onClick={handleLike}/>
                                ) : (
                                    <Favorite style={{fontSize:"20px", margin: "0 10px", color: 'red'}} onClick={handleLike}/>
                                )
                                }
                                    <span className="likes" style={{fontSize:"20px", margin: "0 10px"}}>
                                        {video.likes?.length}
                                    </span>
                                </div>
                                <div className="fullpost-social" style={{
                                    position: "absolute", 
                                    left: '0%', 
                                    bottom: '130px',
                                    backgroundColor:'#0000008a'
                                }}>
                                    <ArrowCircleUpIcon style={{fontSize:"20px", margin: "0 10px"}} onClick={handleUpvote}/>
                                    <span className="upvotes" style={{fontSize:"20px", margin: "0 10px"}}>
                                    {video.upvotes?.length}
                                    </span>
                                </div>
                                </>   
                            )}
                        </div>
                    </div>
                    
                </div>
        </>
    )

}

export default Video

