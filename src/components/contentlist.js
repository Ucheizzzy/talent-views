import ContentlistItem from './Contentlistitem'
// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import '../css/contentlist.modules.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
// import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Contentlist = () => {
    const history = useNavigate();

    const [featured, setFeatured] = useState([])

    // useEffect(() => {
    //     const getFeatured = async () => {
    //         const {data}= await axios.get('/movies/featured', {
    //             headers: {
    //                 token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
    //             }
                
    //         })
    //         setFeatured(data)
    //     }
    //     getFeatured()
    // }, [history])


    // const [slideNumber, setSlideNumber] = useState(0);
    // const [isMoved, setIsMoved] = useState(false);

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
            <span className="contentlistTitle">Recommended Films</span>
            <div className="content-wrapper" >
                <div className="content-container" >
                    {/* {featured.map((card) => (
                        <Link to={`/content/${card._id}`} key={card._id} style={{textDecoration: 'none'}} >
                            <ContentlistItem card={card} />
                        </Link>
                    ))} */}
                    <ContentlistItem />
                    <ContentlistItem />
                    <ContentlistItem />
                    <ContentlistItem />
                    <ContentlistItem />
                    <ContentlistItem />
                    <ContentlistItem />
                    <ContentlistItem />
                    <ContentlistItem />
                </div>
            </div>
        </div>
    )
}

export default Contentlist
