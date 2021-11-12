import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import '../css/navbar.modules.css'

const Navbar = () => {
    const [isScrolled, setisScrolled] = useState(false)

    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }


    return (
        <div className={isScrolled ? 'scrolled' : 'navbar'}>
            <div className="nav-container">
                <div className="left">
                    <img src="https://talentcroft.com/assets/img/logo.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>Riley</span>
                    <Notifications className='icon'/>
                    <img src="./riley.jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Navbar
