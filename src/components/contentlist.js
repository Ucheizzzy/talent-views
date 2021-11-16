import ContentlistItem from './Contentlistitem'
// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import '../css/contentlist.modules.css'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal'



const Contentlist = () => {
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
        <div className='list'>
            <span className="listTitle">Featured</span>
            <div className="content-wrapper" >
                <div className="content-container" ref={listRef} >
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={0}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={1}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={2}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch">     */}
                        <ContentlistItem index={3}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={4}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={5}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={6}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={7}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={8}/>
                    {/* </Link> */}
                    {/* <Link to="/home/watch"> */}
                        <ContentlistItem index={9}/>
                    {/* </Link>    */}
                </div>
            </div>
        </div>
    )
}

export default Contentlist
