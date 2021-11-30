import { BackspaceOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/watch.modules.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Watch = () => {
    // const location = useLocation()
    // const movie = location.movie

    const params = useParams();
    console.log(params)

    const [video, setVideo] = useState([])
    const [film, setFilm] = useState([])

    useEffect(() => {
        const getContent = async () => {
            try {
                const res = await axios.get(`/movies/find/${params.id}`, {
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
                    }
                })
                setFilm(res.data)
                setVideo(res.data.content[0].video[0])
                console.log(res.data.content[0])
            } catch (err) {
                console.log(err)
            }

        }
        getContent()
    }, [])


    return (
        <div className="watch">
            <div className="back">
                <Link
                className="watchLink" 
                to={`/content/${film._id}`} 
                style={
                    {
                        textDecoration: 'none',
                        color: 'white',
                        backgroundColor: 'black',
                        padding: '5px 10px',
                        borderRadius: '15px'
                    }
                }
                >
                    <BackspaceOutlined />
                    <span
                    style={
                        {
                            border: '1px solid white',
                            fontSize: '13px',
                            color: 'black',
                            backgroundColor: 'white',
                            padding: '1px 5px',
                            fontWeight: '600'
                        }
                    }
                    >Exit</span> 
                </Link>
            </div>
            <video src={video} className="video" autoPlay={true} progress controls/>
        </div>
    )
}

export default Watch
