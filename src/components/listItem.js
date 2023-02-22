// import { Add, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios'
import { useEffect, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/listItem.modules.css'
import { useNavigate } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import Media from 'react-media'

const ListItem = ({ index, item }) => {
  const history = useNavigate()

  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})
  const [video, setVideo] = useState({})
  const [caption, setCaption] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  function time_convert(num){ 
    const minutes = Math.floor(num / 60) 
    const seconds = num % 60;
    if (minutes === 0) {
      return `${seconds} seconds`
    } else {
      return `${minutes}:${seconds} minutes`;         
    }
  }

  return (
    <>
      <Media query='(min-width: 769px)'>
        {(matches) => {
          return matches ? (
            <div className='list-item-container'>
              <div
                className='listItem'
                style={{ left: isHovered && index * 220 - 20 + index * 3 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  className='list-image'
                  src={item?.thumbnail}
                  alt=''
                />

                {isHovered && (
                  <div className='listItemHovered'>
                    <video
                      className='listVideo'
                      src={item?.video}
                      width='640'
                      height='360'
                      frameborder='0'
                      allow='autoplay; fullscreen; picture-in-picture'
                      allowfullscreen
                      autoPlay={true}
                      loop
                    />
                    <div className='itemInfo'>
                      <div className='itemIcons'>
                        <span className='orange'>
                          <span className='now'>{item?.name}</span>
                        </span>
                      </div>
                      <div className='item-desc'>
                        <span>{time_convert(item?.duration)}</span>
                        <span className='limit'>+{item?.age_rating}</span>
                      </div>
                      <div className='list-item-caption'>{item?.description}</div>
                      <div className='genre'>{item?.genre}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // </Link>
            // <Link to={`/content/${caption._id}`}>
            <div className='list-item-container'>
              <div className='listItem-sm'>
                <img
                  className='list-image'
                  src={item?.thumbnail}
                  alt=''
                />
              </div>
            </div>
            // </Link>
          )
        }}
      </Media>
    </>
  )
}

export default ListItem
