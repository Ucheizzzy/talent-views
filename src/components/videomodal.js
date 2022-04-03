import React, { useContext, useState, useEffect } from 'react'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { ChatBubble, Favorite, FavoriteBorder, Home, Share, LocationOn, Person, Create, People, DashboardOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import '../css/modal.modules.css'


    


const Modal = ({closeModal, video}) => {
    
    return(<>
        <div className="modalBackground">
            <div class="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modTitle">
                  <img src="https://res.cloudinary.com/rileey/video/upload/v1646869910/views/2022-03-09T23-50-49.473ZPressure%20%28Music%20Video%29.MP4.mp4" alt="" />
                </div>
            </div>
        </div>
    </>)
}
export default Modal