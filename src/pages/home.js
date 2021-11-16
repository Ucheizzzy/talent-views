import React from 'react';
import Navbar from '../components/navbar';
import Featured from '../components/featured';
import List from '../components/list'
import '../css/home.modules.css'
import Contentlist from '../components/contentlist';
import Footer from '../components/footer';

const Home = () => {
    return(
        <div className="App">
            <Navbar/>
            <Featured />
            <Contentlist />
            <List name='Continue Watching'/>
            <List name='Popular'/>
            <List name='My List'/>
            <List name='New Releases'/>
            <List name='Comedy'/>
            <List name='Documentary'/>
            <List name='Kids'/>
            <List name='Series'/>
            <Footer />
        </div>
    )
}

export default Home