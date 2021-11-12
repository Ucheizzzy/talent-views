import { BackspaceOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/watch.modules.css'

const Watch = () => {
    const trailer = '/fdp.mp4'
    return (
        <div className="watch">
            <div className="back">
                <Link
                className="watchLink" 
                to="/home" 
                style={{textDecoration: 'none', color: 'white'}}
                >
                    <BackspaceOutlined />
                    Home 
                </Link>
            </div>
            <video src={trailer} className="video" autoPlay={true} progress controls/>
        </div>
    )
}

export default Watch
