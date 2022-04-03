import { useEffect, useState }from 'react'
import axios from 'axios'
import '../css/uploadlistitem.modules.css'
// import { Link } from 'react-router-dom'

const Contentlistitem = ({upload}) => {

    const [hovered, setIshovered] = useState(false)

    return (
        <div className='upload-list-item'>
            {! hovered ? (
                <video
                onMouseEnter={()=>setIshovered(true)}
                onMouseLeave={()=>setIshovered(false)}
                src=
                {upload.video[0].video}
                alt="" 
                autoPlay="true"
                muted
                loop
                type="video/mp4"/>
            ) : (
                <video
                onMouseEnter={()=>setIshovered(true)}
                onMouseLeave={()=>setIshovered(false)}
                src=
                {upload.video[0].video}
                alt="" 
                loop
                controls
                autoPlay="false"
                type="video/mp4"/>
            )
            }
            
        </div>
    )
}

export default Contentlistitem
