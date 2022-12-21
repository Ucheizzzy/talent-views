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
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
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


    // useEffect(() => {
    //     const getMovie = async () => {

    //         try {
    //             const {data} = await axios.get(`/movies/find/${id}`, {
    //                 headers: {
    //                     token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                        
    //                 }
    //             })
    //             setMovie(data)
    //             setImage(data.image[0])
    //             window.scrollTo(0, 0);
    //         } catch (err) {
    //             console.log(err)
    //         }
            

    //     }
    //     getMovie()
    // }, [id])



     return (
        <>
        <Navbar />
        <div className="content-summary">
        <div className='featured' >
             <LazyLoadImage
             effect="opacity" 
             className='featured-jumbotron'
             style={{position: "fixed"}}
            height='100%'
            src="https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="" 
            />
            <div className="info">
            <span className="film-desc-title">Movie</span>
            {/* <Link to={`/content/watch/${movie.content[0]?._id}`}> */}
                <button className="info-btn"><PlayArrowRoundedIcon />Play</button>
            {/* </Link> */}
            </div>

             </div>
        <div className='film-container' >
            <div className="content-grid">
            <div className="abouts-container">
            <div className="film-details">
                        <span className="p-span">1994</span>
                        <span className="p-span">Rated: <span className='rated-border'>+17</span></span>
            </div>
                
                
            </div>
            <div className="content-inffo">
                <span className="p-span">Drama</span>
            </div>
                <div className="film-description">
                    <span >
                        A movie
                    </span>
                </div>
                <span className="p-span directed">Directed by: <span> Isreal</span></span>
            </div>
            <div className="trailer">
                <span>Trailer</span>
                {/* <button className="episodes">Episodes</button> */}
            </div>
            <div className="section-2">
                <div className="film-content-container">
                
                {/* {movie.content.map((mov) => ( */}
                    {/* // <Link to={`/content/watch/${mov._id}`} key={mov._id} className='i-m-g'> */}
                    <div className="img" >
                    <img className='glow' src="https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" />
                        <div className="desk"><span className="new-title">Movie</span><span className='c-span'>A Movie</span>
                        </div>
                        <div className="duration p-span">1h</div>
                     </div>     
                    </div>   
                    </div>
            </div>
            <Contentlist />
        </div>
        </>
    )
}

export default ContentDescription
