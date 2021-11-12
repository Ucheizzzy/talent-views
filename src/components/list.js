import ListItem from './listItem'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import '../css/list.modules.css'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal'


const List = () => {
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
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper" style={{overflowX: 'visible'}}>
                {/* <ArrowBackIosOutlined 
                className='sliderArrow left' 
                onClick={()=>handleClick('left')}
                style={{display: !isMoved && 'none'}}
                /> */}
                {/* <HorizontalScroll className="scroll" style={{overflow:'visible', position:'relative'}}> */}
                <div className="container" ref={listRef} > 
                    <Link to="/home/watch">
                        <ListItem index={0}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={1}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={2}/>
                    </Link>
                    <Link to="/home/watch">    
                        <ListItem index={3}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={4}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={5}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={6}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={7}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={8}/>
                    </Link>
                    <Link to="/home/watch">
                        <ListItem index={9}/>
                    </Link>   
                </div>
                {/* </HorizontalScroll>  */}
                {/* <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick('right')}/> */}
            </div>
        </div>
    )
}

export default List
