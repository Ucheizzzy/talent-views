import React, { useContext, useState, useEffect } from 'react'
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import '../css/post.modules.css'

const Dashboard = ({video}) => {

    const [click, setClick] = useState(false)
    return(
        <>
                <div className="timeline-posts">
                    <div className="post-container">
                        <div className="post-header">
                            <div className="post-left">
                                <div className="post-info-details">
                                <Link to={`/profile/${video._creator?._id}`}
                                style={{display: 'contents'}}
                                >
                                    <img className="post-info-image" 
                                    src={video._creator.profilePicture[0]?.profilePicture || "./stockphoto.jpeg"} 
                                    alt="deji"
                                    />
                                    
                                    <span className="post-info-name">
                                    {video._creator?.username}
                                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="post-image">
                            <video className="post-imagery" src={video.video[0]?.video} alt="new" controls type="video/mp4"/>
                        </div>
                        <div className="post-footer">
                            <span className="post-footer-caption">
                                <b>{video._creator?.username}:</b> {video.description}
                            </span>

                        </div>
                    </div>
                    
                </div>







            {/* </div> */}
        {/* </div> */}
        </>
    )

}

export default Dashboard

