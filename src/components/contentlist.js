import ContentlistItem from './Contentlistitem'
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons'
import '../css/contentlist.modules.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
// import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Contentlist = (film, lists) => {
  const movies = film?.film
  const newlists = film?.lists
  const history = useNavigate()
  console.log(movies, newlists)

  const [featured, setFeatured] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/movie/allmovies`)
        console.log(res?.data?.data)
        // setMovies(res?.data?.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchMovies()
  }, [])

  return (
    <div className='content-list'>
      <span className='contentlistTitle'>Recommended Films</span>
      <div className='content-wrapper'>
        <div className='content-container'>
          {movies.map((card) => (
            <Link
              to={`/content/${card.id}`}
              key={card.id}
              style={{ textDecoration: 'none' }}
            >
              <ContentlistItem card={card} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contentlist
