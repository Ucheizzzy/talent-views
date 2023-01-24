// import ContentlistItem from './Contentlistitem'
import UploadListItem from './uploadListItem'
// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import '../css/uploadlist.modules.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
// import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Contentlist = () => {
  const history = useNavigate()
  const [post, setPost] = useState([])

  // useEffect(()=> {
  //     const getPosts = async () => {
  //         const res = await axios.get('/posts')
  //         setPost(res.data.data)
  //     }
  //     getPosts()
  // }, [])

  const movies = [
    {
      id: 1,
      name: 'Anastasia',
      description:
        'LIGHT AND SALT (FINAL CHARGE - 2022) WITH APOSTLE JOSHUA SELMAN ||18II12II2022',
      url: 'https://www.youtube.com/embed/iJyXzy6NHF4',
      thumbnail: 'https://img.youtube.com/vi/S_rVV7NVVos/mqdefault.jpg',
      preview: 'Great movie',
      size: '40mb',
      duration: '38177',
    },
    {
      id: 2,
      name: 'Elon Musk',
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
      name: 'Bill Gate',
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

  const ScrollToTop = () => {
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return null
  }

  ScrollToTop()

  return (
    <div className='upload-list'>
      <span class='contentlistTitle'>The Community</span>
      <div className='upload-wrapper'>
        <div className='upload-container'>
          {/* {post.map((upload) => (
                        // <Link to={`/content/${upload._id}`} key={upload._id} style={{textDecoration: 'none'}} >
                            <UploadListItem upload={upload} />
                        // </Link>
                    ))} */}

          {movies.map((movie) => {
            return (
              <Link
                to={`/content/${movie.id}`}
                style={{ textDecoration: 'none' }}
              >
                <UploadListItem key={movie.id} {...movie} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Contentlist
