import React, { Suspense, useContext, useState, useEffect, useRef } from 'react'
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn } from '@material-ui/icons'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ReactPlayer from 'react-player'
// import { Link } from 'react-router-dom'
// import Navbar from '../components/navbar'
import '../css/video.modules.css'
import PostControl from '../components/postControl'
import Media from "react-media"
import { AuthContext } from '../authContext/authContext'
import axios from 'axios'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
// import film from '../images/gif.gif'



const ProfileVideo = ({video}) => {
    const [state, setState] = useState({
        playing: false,
        muted: true,
        volume: 1,
        playbackRate: 1.0,
        played: 0,
        seeking: false,
    })



// console.log(video._creator)

    return(
        <>
                <div className="timeline-posts">
                    <div className="post-container"
                    >
                        <div className="post-imag-e">
                                <>
                                <div className="imagey-user">
                                <img src=""
                                 height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen alt="" className="imagey-image" />
                                <span className="imagey-words">Username</span>
                                </div> 
                                <PlayArrowIcon 
                                    style={{
                                        position: 'absolute',
                                        right: '10',
                                        top: '10',
                                        color: 'white'
                                    }}
                                    />  
                                <div className="imagey-container">

                    <ReactPlayer
                    // ref={playerRef}
                    // url={video.video[0]?.video} 
                    // playing={playing} 
                    // muted={muted}
                    // volume={volume}
                    // playbackRate={playbackRate}
                    // style={{backgroundColor: 'black'}}
                    // onProgress={handleProgress}
                    // width='100%'
                    // height='100%'
                    />
                                                           
                                </div>
                                </>
                                <>
                                <div className="fullpost-social" style={{
                                    position: "absolute", 
                                    left: '0%',
                                    top: '130px', 
                                    backgroundColor:'#0000008a'
                                    }}>
                                    <Favorite style={{fontSize:"20px", margin: "0 10px", color: 'red'}} />
                                    <span className="likes" style={{fontSize:"20px", margin: "0 10px"}}>
                                        0
                                    </span>
                                </div>
                                <div className="fullpost-social" style={{
                                    position: "absolute", 
                                    left: '0%', 
                                    bottom: '130px',
                                    backgroundColor:'#0000008a'
                                }}>
                                    <ArrowCircleUpIcon style={{fontSize:"20px", margin: "0 10px"}}/>
                                    <span className="upvotes" style={{fontSize:"20px", margin: "0 10px"}}>
                                   0
                                    </span>
                                </div>
                                </>   
                        </div>
                    </div>
                    
                </div>
        </>
    )

}

export default ProfileVideo

