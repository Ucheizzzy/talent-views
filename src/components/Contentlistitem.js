import { useEffect, useState }from 'react'
import axios from 'axios'
import '../css/contentlistitem.modules.css'
import { Link } from 'react-router-dom'

const Contentlistitem = ({ card }) => {

    console.log(card.image[0])
    // const [movie, setMovie] = useState({})

    // const trailer = '/fdp.mp4'
    return (
        <div className='content-list-item'>
            
            <img
            src={card.image[0]}
            alt="" />
            {/* {isHovered && ( */}
            {/* // <video className="contentlistVideo" src={trailer} autoPlay={true} loop/>  */}
            {/* )} */}
                <span className='content-title'>{card.title}</span>
        </div>
    )
}

export default Contentlistitem
