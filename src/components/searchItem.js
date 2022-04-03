import axios from 'axios'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/searchitem.modules.css'


const Search = ({content}) => {

    const history = useNavigate()

    const [isHovered, setIsHovered] = useState(false)
    const [caption, setCaption] = useState([])
    const [movie, setMovie] = useState({})
    const [video, setVideo] = useState({})
    const [imgsLoaded, setImgsLoaded] = useState(false)

    const onLoad = () => {
        setImgsLoaded(true)
    }


    useEffect(() => {
        
        const getVideo = async () => {

            try {
                const { data } = await axios.get('movies/find/'+ content._id, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                    }
                })
                setCaption(data)
                // console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
        getVideo()
    }, [history, content])


    useEffect(() => {
        
        const getImage = async () => {

            try {
                const { data } = await axios.get('movies/find/'+ content._id, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                    }
                })
                setMovie(data.thumbnail[0].thumbnail)
                // console.log(data.thumbnail[0].thumbnail)

            } catch (err) {
                console.log(err)
            }
        }
        getImage()
        
        // render top of the page after link is clicked
    }, [history, content])


    useEffect(() => {
        
        const getCaption = async () => {

            try {
                const { data } = await axios.get('movies/find/'+ content._id, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                    }
                })
                setVideo(data.trailer[0].trailer)
                // console.log(data.trailer[0].trailer)
            } catch (err) {
                console.log(err)
            }
        }
        getCaption()
        
        // render top of the page after link is clicked
        
    }, [history, content])

  return (
            <Link to={`/content/${caption._id}`} style={{textDecoration: 'none'}}>
            <div className='search-list'
            // style={{left: isHovered && index * 225 + index * 2.5}}
            onMouseEnter={()=> setIsHovered(true)} 
            onMouseLeave={()=> setIsHovered(false)}>
                
                        <img
                        className='search-image'    
                        onLoad={onLoad}    
                        src={movie}
                        alt="" />
                    {
                        !imgsLoaded && 
                            <img
                            className='search-image-2' 
                            style={{position: 'absolute', left: '0px'}}       
                            src='./loading.gif'
                            alt="" />
                    }   
            
            {isHovered && (
                <>
            <video className="search-list-video" src={video} autoPlay={true} loop />
            <div className="search-itemInfo">
                <div className="itemIcons">
                    <span className="search-orange">
                        <span className="now">{caption.title}</span>
                    </span>
                </div>
                <div className="item-desc">
                    <span>{caption.duration}</span>
                    <span className="limit">+{caption.ageLimit}</span>
                    <span>{caption.year}</span>
                </div>
                    <div className="list-item-caption">Director: {caption.director} 
                </div>
                <div className="list-item-caption">{caption.description}</div>
                <div className="genre">{caption.genre}</div>
                </div>
            

            </>
             )}
             </div>
             </Link>
                        );
}

export default Search