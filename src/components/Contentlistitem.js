import { useState }from 'react'
import '../css/contentlistitem.modules.css'
import { Link } from 'react-router-dom'

const Contentlistitem = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false)
    const trailer = '/fdp.mp4'
    return (
        <div className='contentlistitem'
        style={{left: isHovered && index * 180 + index * 35}}
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=> setIsHovered(false)}>
            <img 
            src="sky.jpeg" 
            alt="" />
            {isHovered && (
            <video className="contentlistVideo" src={trailer} autoPlay={true} loop/> 
            )}
            <Link to="/home/watch">
                <span className='watch-now'>Watch Now</span>
            </Link>
        </div>
    )
}

export default Contentlistitem
