// import { Add, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import '../css/listItem.modules.css'

const ListItem = ({index}) => {

    const [isHovered, setIsHovered] = useState(false)
    const trailer = '/fdp.mp4'
    return (
        <div className='listItem'
        style={{left: isHovered && index * 225 -50 + index * 15}}
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=> setIsHovered(false)}
        >
            <img 
            src="/sky.jpeg" 
            alt="" />
            {isHovered && (
            < >
            <video className="listVideo" src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="itemIcons">
                    {/* <PlayArrowOutlined style={{fontSize: '15px'}} className="itemIcon"/>
                    <Add style={{fontSize: '15px'}} className="itemIcon"/>
                    <ThumbUpAltOutlined style={{fontSize: '15px'}} className="itemIcon"/>
                    <ThumbDownAltOutlined style={{fontSize: '15px'}} className="itemIcon"/> */}
                    <span className="orange">
                        <span className="now">WATCH NOW</span>
                    </span>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 15 mins</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nesciunt cum est perspiciatis? Ut excepturi odit architecto corrupti quod. Accusamus 
                </div>
                <div className="genre">Action</div>
            </div>
            </>
            )}
        </div>
    )
}

export default ListItem
