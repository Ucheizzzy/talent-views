import { InfoOutlined, 
    // PlayArrow 
} from '@material-ui/icons'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
// import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import '../css/featured.modules.css'

const Featured = ({type, setGenre}) => {


    const [content, setContent] = useState({});
    const [trailer, setTrailer] = useState({});
    const [imagee, setImagee] = useState({})
    const [video, setVideo] = useState({})
    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const {data} = await axios.get('/movies/random?type='+ type, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                    }
                })
                setVideo(data[0].content[0])
                setContent(data[0]);
                setImagee(data[0].image[0])
                setTrailer(data[0].trailer[0].trailer)
            } catch (err) {
                console.log(err)
            }
        };
        getRandomContent()
    }, [type])



    return (
        <div className='featured'
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=> setIsHovered(false)}
        >
            {type && (
                <div className="category">
                    <span>{type === 'Movies' ? 'Movies' : 'Series'}</span>
                    <select name='genre' id='genre' onChange={(e)=> setGenre(e.target.value)}>
                        <option> Genre</option>
                        <option value='Adventure'>Adventure</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Crime'>Crime</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Historical'>Historical</option>
                        <option value='Horror'>Horror</option>
                        <option value='Romance'>Romance</option>
                        <option value='Sci-fi'>Sci-fi</option>
                        <option value='Thriller'>Thriller</option>
                        <option value='Cartoons'>Cartoons</option>
                        <option value='Drama'>Drama</option>
                        <option value='Documentary'>Documentary</option>
                    </select>
                </div>
            )}

    {!isHovered ? (
            <img 
            height='100%'
            width='100%'
            className='featured-image'
            src={imagee.image}
            alt="" 
            />
    ) : (
                <>
            <video className="featured-image-2" src={trailer} autoPlay={true} loop />
            </>
            )}
            
            <div className="info">
                <span className="film-title">{content.title}</span>
                <span className="description">{content.description}</span>
                <span className="genre"></span>
                <span className="rated">{content.genre} <b>+{content.ageLimit}</b></span>
                {isClicked ? 
                <div className="more">
                    <span>Directed By {content.director}</span> 
                    <span>{content.year}</span>
                    <span>{content.duration}</span>
                    <Link to={`/content/${content._id}`} style={{textDecoration: 'none', color: 'white',display: 'flex', alignItems: 'center'}}>
                        <span className='somemore'>more...</span>
                    </Link>
                 </div>
                : null}
                 <div className="buttons">
                    <button className="play">
                    <Link to={`/content/watch/${video}`} style={{textDecoration: 'none', color: 'white',display: 'flex', alignItems: 'center'}}>
                        <span>Watch Now</span>
                    </Link>
                    </button>
                    <button className="more-info" onMouseEnter={()=> setIsClicked(true)} onClick={()=> setIsClicked(false)}>

                        <InfoOutlined />
                        <span style={{marginLeft: '5px'}}>Info</span>
                    </button>
                </div> 
            </div>
            
        </div>
        
  
    )
}

export default Featured

