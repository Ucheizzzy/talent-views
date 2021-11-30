import React from 'react'
import { Link } from 'react-router-dom'
import '../css/contentdescription.modules.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import '../css/film.modules.css'
import List from './list'
import Footer from './footer'
import '../css/featured.modules.css'
import Navbar from './navbar'
import Contentlist from './contentlist'

 

const ContentDescription = ({match}) => {
    
    console.log(match)
    
    
const [movie, setMovie] = useState({
    title: '',
    genre: '',
    director: '',
    duration: '',
    year: '',
    ageLimit: '',
    image: '',
    content: [],
    description: '',
})
    
const [desc, setDesc] = useState([])


    useEffect(() => {
        const getMovie = async () => {

            try {
                const res = await axios.get(`/movies/find/${match.params.id}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
                    }
                })
                setMovie(res.data)
                console.log(res.data)
                setDesc(res.data.content)
                console.log(res.data.content)
            } catch (err) {
                console.log(err)
            }
            

        }
        getMovie()
    }, [])



     return (
        <>
        <Navbar />
        <div className='featured' >
             <img style={{position: "fixed"}}
            width='100%'
            height='100%'
            src={movie.image[0]}
            alt="" 
            />
            <div className="info">
            <span className="film-desc-title">{movie.title}</span>
            <div className="film-details">
                    <span>
                        <ul>
                            <li>Genre: <span>{movie.genre}</span></li>
                            <li>Director: <span>{movie.director}</span></li>
                            <li>Duration: <span>{movie.duration}</span></li>
                            <li>Year: <span>{movie.year}</span></li>
                            <li>Rated: <span>{movie.ageLimit}</span></li>
                        </ul>
                    </span>
                </div>
            </div>

             </div>
        <div className='film-container' >
             
            
            <div className='title'>
                <h1> {movie.title}</h1>
            </div>
            <div className="abouts-container">
                <div className="film-description">
                    <span>
                        {movie.description}
                    </span>
                </div>
                
            </div>
            {/* <div className="banner"></div> */}
            <div className="section-2">
                <div className="film-content-container">
                
                {movie.content.map((mov, id) => (
                    <div className="img" key={id}>
                        <Link to={`/content/watch/${movie._id}`} className='i-m-g'>
                            <img
                            className='glow'
                            src={movie.image[0]}
                            alt="" />
                        </Link> 
                        < >
                        
                        <div className="desk">
                            <span className="new-title">{mov.title}</span>
                            <span>{mov.duration}</span>
                            <span>Rated +{mov.ageLimit}</span>
                            <span className='span'>{mov.description}</span>
                        </div>
                        </>

                     </div>
                   ))}
                    
                    </div>

                       

                   
                    
                
            </div>
            <Contentlist movie={movie} />
            <Footer/>
        </div>
        </>
    )
}

export default ContentDescription
