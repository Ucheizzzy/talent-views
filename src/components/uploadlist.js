// import ContentlistItem from './Contentlistitem'
import UploadListItem from './uploadListItem'
// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import '../css/uploadlist.modules.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
// import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Contentlist = () => {
    const history = useNavigate();
    const [post, setPost] = useState([])


    useEffect(()=> {
        const getPosts = async () => {
            const res = await axios.get('/posts')
            setPost(res.data.data)
        }
        getPosts()
    }, [])

    const ScrollToTop = () => {
        useLayoutEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
        return null;
    };

    ScrollToTop()


    return (
        <div className='upload-list'>
            <span class="contentlistTitle">The Community</span>
            <div className="upload-wrapper" >
                <div className="upload-container" >
                    {post.map((upload) => (
                        // <Link to={`/content/${upload._id}`} key={upload._id} style={{textDecoration: 'none'}} >
                            <UploadListItem upload={upload} />
                        // </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contentlist
