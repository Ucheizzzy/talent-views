import React from 'react'
import { Link } from 'react-router-dom'
import '../css/contentdescription.modules.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router'
import '../css/film.modules.css'
// import List from './list'
import Footer from './footer'
import '../css/featured.modules.css'
import Navbar from './navbar'
import Contentlist from './contentlist'
import {useParams} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'


 

const ContentDescription = () => {
    
    // console.log(match)
    const {id} = useParams()
    
const [movie, setMovie] = useState({
    title: '',
    genre: '',
    director: '',
    duration: '',
    year: '',
    ageLimit: '',
    image: [],
    trailer: [],
    thumbnail: [],
    content: [],
    description: '',
})
// const [content, setContent] = useState([])
const [image, setImage] = useState('')


    useEffect(() => {
        const getMovie = async () => {

            try {
                const {data} = await axios.get(`/movies/find/${id}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                        
                    }
                })
                setMovie(data)
                setImage(data.image[0])
                window.scrollTo(0, 0);
            } catch (err) {
                console.log(err)
            }
            

        }
        getMovie()
    }, [id])



     return (
        <>
        <Navbar />
        <div className='featured' >
             <LazyLoadImage
             effect="opacity" 
             className='featured-jumbotron'
            //  style={{position: "fixed"}}
            // height='100%'
            src={image.image}
            alt="" 
            />
            <div className="info">
            <span className="film-desc-title">{movie.title}</span>
            <div className="film-details">
                        <span className="ul">
                        <p>Genre: <span>{movie.genre}</span></p>
                        <p>Director: <span>{movie.director}</span></p>
                        <p>Duration: <span>{movie.duration}</span></p>
                        <p>Year: <span>{movie.year}</span></p>
                        <p>Rated: <span>{movie.ageLimit}</span></p>
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
                    <span >
                        {movie.description}
                    </span>
                </div>
                
            </div>
            {/* <div className="banner"></div> */}
            <div className="section-2">
                <div className="film-content-container">
                
                {movie.content.map((mov) => (
                    <Link to={`/content/watch/${mov._id}`} key={mov._id} className='i-m-g'>
                    <div className="img" >
                        
                            <img
                            className='glow'
                            src={image.image}
                            alt="" />
                        
                        < >
                        
                        <div className="desk">
                            <span className="new-title">{mov.title}</span>
                            <span className='c-span'>{mov.duration}</span>
                            <span className='c-span'>{mov.description}</span>
                        </div>
                        </>

                     </div>
                     </Link> 
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
