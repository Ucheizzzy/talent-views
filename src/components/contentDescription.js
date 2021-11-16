import React from 'react'
import { Link } from 'react-router-dom'
import '../css/contentdescription.modules.css'


const ContentDescription = () => {
    return (
        <div>
            <div className='title'>
                <h1> Film Title </h1>
            </div>
            <div className="about-container">
                <div className="film-card">
                    <img 
                    src="/sky.jpeg" 
                    alt="" />
                </div>
                <div className="film-description">
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maiores odit dignissimos cum quis. Delectus provident accusamus 
                        tenetur aspernatur, animi hic dolores ad, dignissimos eveniet magni nesciunt 
                        cumque dicta facilis voluptate!
                    </span>
                </div>
                <div className="film-details">
                    <span>
                        <ul>
                            <li>Type: Movie</li>
                            <li>Genre: Drama</li>
                            <li>Episodes: 1</li>
                            <li>Director: Scorsese</li>
                            <li>Starring: Robert De Niro, Samuel l Jackson</li>
                            <li>Duration: 2 hours</li>
                            <li>Year: 1997</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="banner"></div>
            <div className="section-2">
                <div className="film-content-container">
                    <Link to="/home/watch">
                    <div className="img">
                    <img 
                    src="/sky.jpeg" 
                    alt="" />
                    <span>1</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="banner"></div>    
        </div>
    )
}

export default ContentDescription
