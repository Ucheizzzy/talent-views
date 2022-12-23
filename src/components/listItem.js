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

  // useEffect(() => {

  //     const getVideo = async () => {

  //         try {
  //             const { data } = await axios.get('movies/find/'+ item, {
  //                 headers: {
  //                     token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
  //                 }
  //             })
  //             setCaption(data)
  //             // window.scrollTo(0, 0);
  //         } catch (err) {
  //             console.log(err)
  //         }
  //     }
  //     getVideo()
  // }, [item, history])

  // useEffect(() => {

  //     const getImage = async () => {

  //         try {
  //             const { data } = await axios.get('movies/find/'+ item, {
  //                 headers: {
  //                     token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1n'
  //                 }
  //             })
  //             setIsLoading(false)
  //             setMovie(data.thumbnail[0].thumbnail)

  //         } catch (err) {
  //             console.log(err.message)
  //             setIsLoading(false)
  //         }
  //     }
  //     getImage()
  // }, [item, history])

  useEffect(() => {
    const getCaption = async () => {
      try {
        const { data } = await axios.get('movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M',
          },
        })

        setVideo(data.trailer[0].trailer)
      } catch (err) {
        console.log(err)
      }
    }
    getCaption()
  }, [item, history])

  return (
    <>
      <Media query='(min-width: 769px)'>
        {(matches) => {
          return matches ? (
            // <Link to={`/content/${caption._id}`}>
            <div className='list-item-container'>
              <div
                className='listItem'
                style={{ left: isHovered && index * 220 - 20 + index * 3 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  className='list-image'
                  src='https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                  alt=''
                />

                {isHovered && (
                  <>
                    <video
                      className='listVideo'
                      src='https://player.vimeo.com/video/133021234?h=d0e2a333d6'
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
                          <span className='now'>Movie</span>
                        </span>
                      </div>
                      {/* <div className="itemInfoTop"> */}
                      <div className='item-desc'>
                        <span>2 hr</span>
                        <span className='limit'>+17</span>
                        <span>1994</span>
                      </div>
                      <div className='list-item-caption'>A Movie</div>
                      <div className='genre'>Drama</div>
                    </div>
                  </>
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
                  src='https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
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
