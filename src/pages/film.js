import React from 'react'
import ContentDescription from '../components/contentDescription'
import Footer from '../components/footer'
// import List from '../components/list'
import Navbar from '../components/navbar'
import '../css/film.modules.css'

const Film = () => {
    
    return (
        <div className='film-container'>
            
            <ContentDescription />
            {/* <div className="recommended-container"> */}
                {/* <List  /> */}
            {/* </div> */}
           
        </div>
    )
}

export default Film
