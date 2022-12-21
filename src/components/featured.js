import { InfoOutlined, 
    // PlayArrow 
} from '@material-ui/icons'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/featured.modules.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

const Featured = ({type, setGenre}) => {


    const [content, setContent] = useState({});
    const [trailer, setTrailer] = useState({});
    const [imagee, setImagee] = useState({})
    const [video, setVideo] = useState({})
    // const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    

    // useEffect(() => {
    //     const getRandomContent = async () => {
    //         try {
    //             const {data} = await axios.get('/movies/random?type='+ type, {
    //                 headers: {
    //                     token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
    //                 }
    //             })
    //             setVideo(data[0].content[0])
    //             setContent(data[0]);
    //             setImagee(data[0].image[0])
    //             setTrailer(data[0].trailer[0].trailer)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };
    //     getRandomContent()
    // }, [type])



    return (
        <div className='featured'
        // onMouseEnter={()=> setIsHovered(true)} 
        // onMouseLeave={()=> setIsHovered(false)}
        >
            {/* {type && ( */}
                <div className="category">
                    <span>Movies</span>
                    <select name='genre' id='genre'>
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
            {/* )} */}

    {/* {!isHovered ? (
            <div 
            className="featured-image"
            style={{backgroundImage: `linear-gradient(to bottom, transparent, #000000), url(https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)`, objectFit: 'cover'}}>

            </div>
    ) : */}
     {/* ( */}
                <>
            <video className="featured-image-2"
            width="560" height="315" src="https://www.youtube.com/embed/Qh6O9xqsCZs"
            autoPlay={true} 
            loop />
            </>
            {/* )} */}
            
            <div className="info">
                <span className="film-title">Film</span>
                <span className="description">A film</span>
                <span className="genre"></span>
                <span className="rated">Drama<b>+17</b></span>
                {/* {isClicked ?  */}
                <div className="more">
                    <span>Directed By Isreal</span> 
                    <span>1994</span>
                    <span>2 hr</span>
                    {/* <Link to={`/content/${content._id}`} style={{textDecoration: 'none', color: 'white',display: 'flex', alignItems: 'center'}}> */}
                        <span className='somemore'>more...</span>
                    {/* </Link> */}
                 </div>
                {/* : null} */}
                 <div className="buttons">
                    <button className="play">
                    {/* <Link to={`/content/watch/${video}`} style={{textDecoration: 'none', color: 'white',display: 'flex', alignItems: 'center'}}> */}
                        <span className='actions'>Watch Now</span>
                    {/* </Link> */}
                    </button>
                    <button className="more-info" 
                    // onClick={()=> isClicked ? setIsClicked(false): setIsClicked(true)}
                    >

                        <InfoOutlined style={{width: '0.5em',height: '0.7em', color: 'black'}} />
                        <span className='actions' style={{marginLeft: '5px'}}>Info</span>
                    </button>
                </div> 
            </div>
            
        </div>
        
  
    )
}

export default Featured

