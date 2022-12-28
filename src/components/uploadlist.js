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


    // useEffect(()=> {
    //     const getPosts = async () => {
    //         const res = await axios.get('/posts')
    //         setPost(res.data.data)
    //     }
    //     getPosts()
    // }, [])

    const listdata = [
        {
            "id": 1,
          "name": "Anastasia Stevens",
          "phone": "1-895-817-3734",
          "email": "erat@icloud.edu",
          "country": "Poland",
          "url": "https://youtu.be/5GhhVHpPR_M",
          "region": "Kurgan Oblast",
          "postalZip": "38177",
          "text": "eu tempor erat neque non quam. Pellentesque habitant morbi tristique",
          "numberrange": 4
        },
        {
            "id": 2,
          "name": "Daphne Lang",
          "phone": "(526) 892-3350",
          "email": "cursus@protonmail.com",
          "country": "Peru",
          "region": "South Jeolla",
          "postalZip": "5780",
          "text": "In at pede. Cras vulputate velit eu sem. Pellentesque ut",
          "numberrange": 9
        },
        {
            "id": 3,
          "name": "Fleur Ballard",
          "phone": "1-632-676-0481",
          "email": "arcu.eu.odio@yahoo.net",
          "country": "Australia",
          "region": "Aisén",
          "postalZip": "4983",
          "text": "nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis",
          "numberrange": 8
        },
        {
            "id": 4,
          "name": "Delilah Donovan",
          "phone": "1-680-887-6617",
          "email": "aliquet@hotmail.com",
          "country": "South Korea",
          "region": "Vermont",
          "postalZip": "RD52 2EB",
          "text": "iaculis, lacus pede sagittis augue, eu tempor erat neque non",
          "numberrange": 0
        },
        {
            "id": 5,
          "name": "George Fleming",
          "phone": "1-393-832-1718",
          "email": "eros.nam@protonmail.ca",
          "country": "Brazil",
          "region": "Smolensk Oblast",
          "postalZip": "4143",
          "text": "eget mollis lectus pede et risus. Quisque libero lacus, varius",
          "numberrange": 7
        }
      ]

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
                    {/* {post.map((upload) => (
                        // <Link to={`/content/${upload._id}`} key={upload._id} style={{textDecoration: 'none'}} >
                            <UploadListItem upload={upload} />
                        // </Link>
                    ))} */}

                    {listdata?.map((item)=>(
                        <Link to={`/content/${item.id}`} key={item.id} style={{textDecoration: 'none'}} >
                            <UploadListItem item={item} />
                        </Link>
                    ))}
                    {/* <
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />
                    <UploadListItem />  */}
                </div>
            </div>
        </div>
    )
}

export default Contentlist
