import ContentlistItem from './Contentlistitem'
// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import '../css/contentlist.modules.css'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const FakeContentlist = ({content}) => {
    const history = useHistory();


        console.log(content)
    // const [featured, setFeatured] = useState([])

    // useEffect(() => {
    //     const getFeatured = async () => {
    //         const res = await axios.get('/movies/featured', {
    //             headers: {
    //                 token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
    //             }
                
    //         })
    //         setFeatured(res.data)
    //     }
    //     getFeatured()

    //     const unlisten = history.listen(() => {
    //         window.scrollTo(0, 0);
    //       });
    //       return () => {
    //         unlisten();
    //       }
    // }, [])


    // const [slideNumber, setSlideNumber] = useState(0);
    // const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef()

    // const handleClick = (direction) => {
    //     setIsMoved(true)
    //     let distance = listRef.current.getBoundingClientRect().x - 50
    //     if (direction === 'left' &&  slideNumber > 0){
    //         setSlideNumber(slideNumber - 1)
    //         listRef.current.style.transform = `translateX(${230 + distance}px)`
    //     }
    //     if (direction === 'right' && slideNumber < 5){
    //         setSlideNumber(slideNumber + 1)
    //         listRef.current.style.transform = `translateX(${-230 + distance}px)`
    //     }
    // }
    return (
        <div className='content-list'>
            <span className="listTitle">Recommended</span>
            <div className="content-wrapper" >
                <div className="content-container" ref={listRef} >
                    {content.map(card => (
                        <Link to={`/content/${card._id}`} style={{textDecoration: 'none'}} > 
                             <ContentlistItem card={card} /> 
                        </Link> 
                     ))} 
                </div>
            </div>
        </div>
    )
}

export default FakeContentlist
