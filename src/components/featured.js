import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import '../css/featured.modules.css'

const featured = ({type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name='genre' id='genre'>
                        <option> Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='historical'>Historical</option>
                        <option value='horror'>Horror</option>
                        <option value='romance'>Romance</option>
                        <option value='sci-fi'>Sci-fi</option>
                        <option value='thriller'>Thriller</option>
                        <option value='animation'>Animation</option>
                        <option value='drama'>Drama</option>
                        <option value='documentary'>Documentary</option>
                    </select>
                </div>
            )}
            <img 
            width='100%'
            src="./movie.jpeg"
            alt="" 
            />
            <div className="info">
                <img 
                src="./design.jpeg" 
                alt="" 
                />
                <span className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Porro id eveniet voluptatibus itaque! Et exercitationem impedit molestias doloremque velit, 
                voluptate quisquam magni nemo laudantium quo explicabo dolor molestiae, corporis odio.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Watch Now</span>
                    </button>
                    <button className="more-info">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default featured

