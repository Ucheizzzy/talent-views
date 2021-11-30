// import { Add, PlayArrowOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios'
import { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import '../css/listItem.modules.css'
import { useHistory } from 'react-router-dom'

const ListItem = ({index, item}) => {

    const history = useHistory()

    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({})
    const [video, setVideo] = useState({})
    const [caption, setCaption] = useState({})

    useEffect(() => {
        
        const getMovie = async () => {

            try {
                const res = await axios.get('movies/find/'+ item, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
                    }
                })
                // console.log(res.data)
                setCaption(res.data)
                setMovie(res.data.image[0])
                setVideo(res.data.content[0].video[0])
            } catch (err) {
                console.log(err)
            }
        }
        getMovie()
        
        // render top of the page after link is clicked

        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
          });
          return () => {
            unlisten();
          }
    }, [item])

    // console.log(video)

    return (
        <Link to={`/content/${caption._id}`}>
        <div className="list-item-container">
        <div className='listItem'
        style={{left: isHovered && index * 225 -50 + index * 7}}
        onMouseEnter={()=> setIsHovered(true)} 
        onMouseLeave={()=> setIsHovered(false)}
        >
            <img 
            src={movie}
            alt="" />
            {isHovered && (
            < >
            <video className="listVideo" src={video} autoPlay={true} loop />
            {/* {movie.video[0]} */}
            <div className="itemInfo">
                <div className="itemIcons">
                    {/* <PlayArrowOutlined style={{fontSize: '15px'}} className="itemIcon"/>
                    <Add style={{fontSize: '15px'}} className="itemIcon"/>
                    <ThumbUpAltOutlined style={{fontSize: '15px'}} className="itemIcon"/>
                    <ThumbDownAltOutlined style={{fontSize: '15px'}} className="itemIcon"/> */}
                    <span className="orange">
                        <span className="now">{caption.title}</span>
                    </span>
                </div>
                <div className="itemInfoTop">
                    <span>{caption.duration}</span>
                    <span className="limit">+{caption.ageLimit}</span>
                    <span>{caption.year}</span>
                </div>
                <div className="caption">{caption.description} 
                </div>
                <div className="genre">{caption.genre}</div>
            </div>
            </>
             )}
        </div>
        </div>
        </Link> 
    )
}

export default ListItem
