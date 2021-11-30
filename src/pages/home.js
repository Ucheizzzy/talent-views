import React from 'react';
import Navbar from '../components/navbar';
import Featured from '../components/featured';
import List from '../components/list'
import '../css/home.modules.css'
import Contentlist from '../components/contentlist';
import Footer from '../components/footer';
import { useState, useEffect  } from 'react';
import axios from 'axios';

const Home = ({ type }) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomList = async () => {
            try {
                const res = await axios.get(`lists${type ? '?type='+ type : ''}${genre ? '&genre='+ genre : ''}`,{
                    headers: {
                        token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjOTQyZDI3MjU2MDQ3NjMwOTE1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAyOTU1NCwiZXhwIjoxNjQwNjIxNTU0fQ.UurNPJlSNfewvVi97lKZjhmf7Ngp_arB3AyDvYYZbk8'
                    }
                }) 
                // console.log(res.data)
                setLists(res.data)
            } catch (err) {
                console.log(err )
            }
        };
        getRandomList()
    }, [type, genre])
    return(
        <div className="App">
            <Navbar/>
            <Featured type={ type } setGenre={setGenre}/>
            <Contentlist lists={lists}/>
            {lists.map((list) => (
                <List list={list}/>
            ))}
            <Footer />
        </div>
    )
}

export default Home