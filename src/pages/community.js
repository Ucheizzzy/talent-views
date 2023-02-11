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
import { Link, useHistory, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'
import PostModal from '../components/postModal'
import '../css/community.modules.css'
import Video from '../components/video'
import { Routes, Route } from 'react-router-dom'
import { API_URL } from '../services/user.service'
import axios from 'axios'
import authHeader from '../services/auth-header'
import { PostContext } from '../Context/postContext/PostContext'
import { deleteMovie, getPosts } from '../Context/postContext/apiCalls'
import { AuthContext } from '../authContext/authContext'

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { user } = useContext(AuthContext)
  const { posts, dispatch } = useContext(PostContext)
  const [loading, setLoading] = useState(false)
  const profile = user?.data?.user
  useEffect(() => {
    setLoading(true)
    getPosts(dispatch)
    setLoading(false)
  }, [dispatch])

  if (posts === [] || posts.length === 0) {
    return null
  }
  return (
    <>
      <div className='community-container'>
        <Navbar />
        <div className='community-header'>
          {loading && <div className='big-loader'></div>}
          <div className='community-bar'>
            <Link to='/timeline'>
              <div className='top-logo'>
                <DashboardOutlined className='c-comp' /> Timeline
              </div>
            </Link>
            <Link to={`/profile/${profile?.id}`}>
              <div className='top-logo'>
                <Home className='c-comp' /> Me
              </div>
            </Link>
          </div>
        </div>
        <div className='premium-container'>
          <div className='video-list'>
            {posts?.map((post) => (
              <Link to={{ pathname: `/community/${post.id}`, post: post }}>
                <Video key={post?.id} post={post} />
              </Link>
            ))}
          </div>
        </div>

        <Routes>
          <Route exact path='/:id' element={<PostModal posts={posts} />} />
        </Routes>
      </div>
    </>
  )
}

export default Community
