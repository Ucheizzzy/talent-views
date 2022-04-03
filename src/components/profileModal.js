import React, { useContext, useState, useEffect } from 'react'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn, Person, Create, People, DashboardOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/profilemodal.modules.css'
import picture from '../images/stockphoto.jpeg'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import { AuthContext } from '../authContext/authContext';






const Modal = ({closeModal, profilePicture}) => {

    const { user } = useContext(AuthContext)
    const [image, setImage] = useState({})
    const [person, setPerson] = useState({})
    const [file, setFile] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value
        setPerson({...person, [e.target.name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
             let data = new FormData();

            data.append('userId', user._id) 
            if(person.username){
                data.append('username', person.username)
            }
            if(person.email) {
            data.append('email', person.email)
            }
            if(person.about) {
            data.append('about', person.about)
            }
            if (!image) {
                data.append('profilePicture', person.profilePicture[0]?.profilePicture)
            }else {
            for (let i = 0; i < image.length; i++) {
                data.append('profilePicture', image[i], image[i].name)
            }
            try {
                await axios.put(`/users/${user._id}`, data )
                setLoading(false)
                window.location.reload()
            } catch (err) {
                console.log(err);
            }
        } 
            
    }

    
    
    return(<>
        <div className="modalBackgroun-d">
            <form class="modalContaine-r" >
                <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modImage">
                    <img src={profilePicture?.profilePicture || picture} alt="" className="mod-picture" />
                    <input type="file" id='image' name="profilePicture" className='modd-image' accept= "image/png, image/jpeg" onChange={(e)=>{
                        setImage(e.target.files)
                        setFile(true)
                    }}/>
                    <div className="moddLogo">
                        <CameraAltRoundedIcon />
                    </div>
                </div>
                {
                    file ? (
                <span className="uploade-d">File Chosen</span>
                ) : (null)
                }
                <div className="mod-container">
                    <div className="mod-type">
                        <label className="label">Your Name</label>
                        <input type="text" name="username" id="" placeholder={"Change name from " +user.username + " ?"} className="mod-input" onChange={handleChange} />
                    </div>
                    <div className="mod-type">
                        <label className="label">Your Email</label>
                        <input type="text" name="email" id="" placeholder={"Change email from " +user.email + " ?"} className="mod-input" onChange={handleChange} />
                    </div>
                    <div className="mod-type">
                        <label className="label">About You</label>
                        <input type="text" name="about" id="" placeholder={"Tell us about " +user.username } className="mod-input" onChange={handleChange} />
                    </div>
                </div>
                {
                    loading ? (
                <div className="end" >
                    <div class="loader"></div>
                    <input type="button" value="Updating..." className="update" onClick={handleSubmit}/>
                </div>
                    ) : (
                <div className="end" >
                    {/* <div class="loader"></div> */}
                    <input type="button" value="Update" className="update" onClick={handleSubmit}/>
                </div>
                    )
                }
            </form>
        </div>
    </>)
}
export default Modal