import React from 'react';
import Navbar from '../components/navbar';
import Featured from '../components/featured';
import List from '../components/list'
import '../css/home.modules.css'

const Home = () => {
    return(
        <div className="App">
            <Navbar/>
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home