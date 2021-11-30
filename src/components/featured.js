import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'
import '../css/featured.modules.css'

const Featured = ({type, setGenre}) => {

    const [content, setContent] = useState({});
    const [imagee, setImagee] = useState({})
    const [video, setVideo] = useState({})
    const [isClicked, setIsClicked] = useState(false)
    

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const response = await axios.get('/movies/random?type='+ type, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
                    }
                })
                setVideo(response.data[0]._id)
                setContent(response.data[0]);
                setImagee(response.data[0].image[0])
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        };
        getRandomContent()
    }, [type])

    const handleClick = () => {
        setIsClicked(true)
    }

    return (
        <div className='featured'>
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
            <img 
            width='100%'
            height='100%'
            className='featured-image'
            src={imagee}
            alt="" 
            />
            
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
                    <button className="more-info" onClick={handleClick} >
                    
                        <InfoOutlined />
                        <span style={{marginLeft: '5px'}}>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured

