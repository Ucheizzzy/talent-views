import React, { useContext, useState, useEffect } from 'react'
import {
  ChatBubble,
  Favorite,
  FavoriteBorder,
  Home,
  Share,
  LocationOn,
  Person,
  Create,
  People,
  DashboardOutlined,
} from '@material-ui/icons'
import axios from 'axios'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import PostModal from '../components/postModal'
import '../css/community.modules.css'

import Video from '../components/video'

import { Routes, Route } from 'react-router-dom'

// Modal.setAppElement('#root')

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const community = [
    {
      id: 1,
      name: 'Anastasia Stevens',
      description:
        'LIGHT AND SALT (FINAL CHARGE - 2022) WITH APOSTLE JOSHUA SELMAN ||18II12II2022',
      url: 'https://www.youtube.com/watch?v=S_rVV7NVVos',
      thumbnail: 'https://img.youtube.com/vi/S_rVV7NVVos/mqdefault.jpg',
      preview: 'Great movie',
      size: '40mb',
      duration: '38177',
    },
    {
      id: 2,
      name: 'Anastasia Stevens',
      description:
        'LIGHT AND SALT (FINAL CHARGE - 2022) WITH APOSTLE JOSHUA SELMAN ||18II12II2022',
      url: 'https://www.youtube.com/watch?v=S_rVV7NVVos',
      thumbnail: 'https://img.youtube.com/vi/S_rVV7NVVos/mqdefault.jpg',
      preview: 'Great movie',
      size: '40mb',
      duration: '38177',
    },
    {
      id: 3,
      name: 'Anastasia Stevens',
      description:
        'LIGHT AND SALT (FINAL CHARGE - 2022) WITH APOSTLE JOSHUA SELMAN ||18II12II2022',
      url: 'https://www.youtube.com/watch?v=S_rVV7NVVos',
      thumbnail: 'https://img.youtube.com/vi/S_rVV7NVVos/mqdefault.jpg',
      preview: 'Great movie',
      size: '40mb',
      duration: '38177',
    },
    {
      id: 4,
      name: 'Anastasia Stevens',
      description:
        'LIGHT AND SALT (FINAL CHARGE - 2022) WITH APOSTLE JOSHUA SELMAN ||18II12II2022',
      url: 'https://www.youtube.com/watch?v=S_rVV7NVVos',
      thumbnail: 'https://img.youtube.com/vi/S_rVV7NVVos/mqdefault.jpg',
      preview: 'Great movie',
      size: '40mb',
      duration: '38177',
    },
  ]
  return (
    <>
      <div className='community-container'>
        <Navbar />
        <div className='community-header'>
          <div className='community-bar'>
            <Link to='/timeline'>
              <div className='top-logo'>
                <DashboardOutlined className='c-comp' /> Timeline
              </div>
            </Link>
            {/* <Link to={`/profile/${user.username}`}> */}
            <div className='top-logo'>
              <Home className='c-comp' /> Me
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className='premium-container'>
          <div
            className='video-list'
            style={{
              width: '1200px',
              height: '1080px',
            }}
          >
            {community.map((video) => {
              return <Video key={video.id} {...video} />
            })}
          </div>
        </div>

        <Routes>
          <Route exact path='/:id' element={<PostModal />} />
        </Routes>
      </div>
    </>
  )
}

export default Community
