import ListItem from './listItem'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import '../css/list.modules.css'
import { useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import HorizontalScroll from 'react-scroll-horizontal'
// import Contentlistitem from './Contentlistitem'


const List = ({list}) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [isError, setIsError] = useState(null)

    const listRef = useRef()


    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50

        // let dist = listRef.current.getBoundingClientRect()
        // console.log(dist)
        if (direction === 'left' &&  slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${240 + distance}px)`
        }
        if (direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-240 + distance}px)`
        }
    }

    return (
        <div className='list'>
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                className='sliderArrow left' 
                onClick={()=>handleClick('left')}
                style={{display: !isMoved && 'none'}}
                />
                {/* <HorizontalScroll className="scroll" style={{overflow:'visible', position:'relative'}}> */}
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <div key={i}>
                        <div className="list-item-2" key={item._id} >
                            <ListItem index={i} item={item}/>
                        </div>
                        </div>
                    ))}
                </div>
                {/* </HorizontalScroll>  */}
                <ArrowForwardIosOutlined 
                className='sliderArrow-s right' 
                onClick={()=>handleClick('right')}/>
            </div>
        </div>
    )
}

export default List
