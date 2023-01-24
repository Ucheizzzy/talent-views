import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/uploadlistitem.modules.css'
import { Link } from 'react-router-dom'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

const Contentlistitem = ({ upload, name, thumbnail, url }) => {
  const [hovered, setIshovered] = useState(false)

  return (
    // <Link to={`/community/${upload._id}`}>
    <div className='upload-list-item'>
      {!hovered ? (
        <div
          className='vid-container'
          onMouseOver={() => setIshovered(true)}
          onMouseLeave={() => setIshovered(false)}
        >
          <p>{name}</p>
          {/* <video
            src={url}
            width='640'
            height='360'
            alt='youtube vids'
            autoPlay='true'
            muted
            loop
            type='video/mp4'
          /> */}

          {/* <video width='750' height='500' controls>
            <source src={url} type='video/mp4' />
          </video> */}
          <iframe
            style={{ border: '1px solid red' }}
            src={url}
            width={`100%`}
            height={`100%`}
            frameborder='0'
            allow='autoplay; encrypted-media; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        <div
          className='vid-container'
          onMouseOver={() => setIshovered(true)}
          onMouseLeave={() => setIshovered(false)}
        >
          <video
            src={url}
            width='640'
            height='360'
            alt=''
            loop
            // autoPlay="false"
            type='video/mp4'
          />
          <p>{name}</p>
          <PlayArrowRoundedIcon
            style={{
              fontSize: '50px',
              position: 'absolute',
              bottom: '35%',
              left: '32%',
            }}
          />
          <div className='vid-overlay'></div>
        </div>
      )}
    </div>
    // </Link>
  )
}

export default Contentlistitem
