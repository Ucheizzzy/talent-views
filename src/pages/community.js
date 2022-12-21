import React, { useContext, useState, useEffect } from 'react'
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn, Person, Create, People, DashboardOutlined } from '@material-ui/icons'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import PostModal from '../components/postModal'
import '../css/community.modules.css'

import Video from '../components/video'

import { Routes, Route } from 'react-router-dom'


// Modal.setAppElement('#root')

const Community = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return(
                <>
                  <div className="community-container" >
                  <Navbar />
                      <div className="community-header" >
                          <div className="community-bar">
                              <Link to="/timeline" >
                                  <div className="top-logo">
                                      <DashboardOutlined className='c-comp'/> Timeline
                                  </div>
                              </Link>
                              {/* <Link to={`/profile/${user.username}`}> */}
                                  <div className="top-logo">
                                      <Home className='c-comp'/> Me
                                  </div>
                              {/* </Link> */}
                          </div>
                      </div>
                      <div className="premium-container" >
                          <div className="video-list" >
                          <Video/>
                          <Video/>
                          <Video/>
                          <Video/>
                          <Video/>
                          <Video/>
                          </div>
                      </div>
          
          
                  <Routes >
                      <Route exact path="/:id" element={<PostModal />}/>
                  </Routes >
                      
                  </div>
                     </>
    )
}

export default Community
        