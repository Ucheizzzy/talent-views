
import '../css/fullpost.modules.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ChatBubble, Favorite, ArrowUpwardOutlined, FavoriteBorder, Home, Share, LocationOn } from '@material-ui/icons'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import {useParams,Link, useNavigate} from 'react-router-dom'
import {format} from 'timeago.js'
import Navbar from './navbar';
import { AuthContext } from '../authContext/authContext';
import image from '../images/stockphoto.jpeg'

const Fullpost = ({user, post}) => {

    const history = useNavigate()
    const [click, setClick] = useState(false)
    // const [post, setPost] = useState([])
    const [isHovered, setIsHovered] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isUpvoted, setIsUpvoted] = useState(false)
    const [profilePicture, setProfilePicture] = useState('')
    const { user:currentUser, dispatch } = useContext(AuthContext)
    const [followUser, setFollowUser] = useState(currentUser.following.includes(post._creator?._id))
    const [like, setLike] = useState(post.likes?.length)
    const [upvote, setUpvote] = useState(post.upvotes?.length)
    const [vid, setVid] = useState([])
    const {id} = useParams()

    useEffect(() => {
        setIsLiked(post.likes?.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
        setIsLiked(post.upvotes?.includes(currentUser._id))
    }, [currentUser._id, post.upvotes])

    useEffect(() => {
        const followUser = async () => {
           const res = await axios.put(`/users/${post._creator?._id}/follow`)
           setFollowUser(user.following.includes(user?._id))
        }
        followUser()
    }, [post._creator?._id, user, user?._id])

    useEffect(() => {
        const getUser = async () => {
           const res = await axios.get(`/users/find/${post._creator?._id}`)
           setProfilePicture(res.data.profilePicture[0].profilePicture)

        }
        getUser()
    }, [post._creator])

    useEffect(()=> {
        const getVideo = async () => {
            const res = await axios.get(`/posts/find/${id}`)
            setVid(res.data.getOnePost.video[0].video)
        }
        getVideo()
    }, [id])

    const handleFollow = async () => {
        try { 
            if (followUser) {
                await axios.put(`/users/${post._creator?._id}/unfollow`,{
                    userId: currentUser._id,
                })
                dispatch({type: 'UNFOLLOW', payload: post._creator?._id})
            } else {
                await axios.put(`/users/${post._creator?._id}/follow`,{
                    userId: currentUser._id,
                })
                dispatch({type: 'FOLLOW', payload: post._creator?._id})
            }
        } catch (err) {
            console.log(err)
        }
        setFollowUser(!followUser)
    }
            

    const handleLike = async () => {
            try {
                await axios.put(`/posts/${post._id}/like`, {
                    userId: currentUser._id,
                })
                if(!isLiked && post.likes.includes(currentUser._id)){
                    setClick(true)
                    setLike(like + 1)
                }
                if(isLiked && post.likes.includes(currentUser._id)){
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
            await axios.put(`/posts/${post._id}/upvote`, {
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

const handleIcon = async() => {
    try {
        await axios.delete(`/posts/${post._id}`)
        history(`/profile/${currentUser._id}`)
        window.location.reload()
        
    } catch (err) {
        console.log(err)
    }
}



return(
    <>
   
        <div className="fullpost-container" 
        style={{width: '100vw'}}
        >
            <div className="fullpost">
                <div className="fullpost-img-container">
                    <video id=""className="fullpost-img" src={vid} alt="new stuff" type="mp4" controls/>
                </div>
                <div className="fullpost-engagement-container">
                    <div className="fullpost-top">
                        <div className="person-info">
                            <div className="person-info-left">
                                <Link to={`/profile/${post._creator?._id}`} >
                                    <img className="person-info-img" src={profilePicture || image} alt="" />
                                </Link>
                                <span className="person-info-name">
                                    {post._creator?.username}
                                </span>
                               
                            </div>
                            <div className="person-info-right">
                                {post._creator?.email === currentUser.email && (
                                    <>
                                    {
                                        isHovered ? (
                                            <RemoveCircleRoundedIcon 
                                            onMouseEnter={()=>setIsHovered(true)}
                                            onMouseLeave={()=>setIsHovered(false)}    
                                            onClick={handleIcon}
                                            style={{
                                            color: 'red', 
                                            fontSize: '30px', 
                                            marginRight: '30px',
                                            cursor: 'pointer'
                                        }}
                                            />
                                        ) : (
                                            <DeleteForeverRoundedIcon 
                                            onMouseEnter={()=>setIsHovered(true)}
                                            onMouseLeave={()=>setIsHovered(false)}    
                                            onClick={handleIcon}
                                            style={{
                                            color: 'white', 
                                            fontSize: '30px', 
                                            marginRight: '30px',
                                            cursor: 'pointer'
                                        }}
                                            />
                                        )
                                    }
                                    </>
                                )}
                                {post._creator?.email !== currentUser.email && (
                                <button className="post-info-button"
                                onClick={handleFollow}
                                >
                                    {followUser ? 'Unfollow' : 'Follow'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="fullpost-bottom">
                        <div className="fullpost-caption-container">
                            <span className="fullpost-caption">
                                {post.description}
                            </span>
                            <span className="fullpost-time">
                                {format(post.createdAt)}
                            </span>
                        </div>
                        <div className="fullpost-engagement">
                            <div className="fullpost-social">
                                {
                            !click ? (
                                <FavoriteBorder style={{fontSize:"50px", margin: "0 10px"}} onClick={handleLike}/>
                            ) : (
                                <Favorite style={{fontSize:"50px", margin: "0 10px", color: 'red'}} onClick={handleLike}/>
                            )
                            }
                                <span className="likes">
                                    {post.likes?.length}
                                </span>
                            </div>
                            <div className="fullpost-social">
                                <ArrowCircleUpIcon style={{fontSize:"50px", margin: "0 10px"}} onClick={handleUpvote}/>
                                <span className="upvotes">
                                {post.upvotes?.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
    )
}

export default Fullpost