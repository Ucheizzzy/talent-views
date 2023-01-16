import React from 'react'
import Navbar from '../components/navbar'
import Featured from '../components/featured'
import List from '../components/list'
import '../css/home.modules.css'
import Contentlist from '../components/contentlist'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UploadList from '../components/uploadlist'
// import { Modal } from '../components/modal';

const Home = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)
  const [film, setFilm] = useState({})
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user?.data?.token
  const config = {
    headers:{
      'Authorization': `Bearer ${token}`
    }
  };
  const getRandom = async () => {
    try {
      const { movie } = await axios
        .get('http://127.0.0.1:8000/api/movie/allmovies', config)
        .then((response) => {
          // console.log("data:", response?.data?.data[0]);
          setFilm(response?.data?.data[1]);
        })
    } catch (err) {
      console.log(err)
    }
  }
  console.log(user?.data?.user)

  useEffect(() => {
    getRandom()
  }, [])



  return (
    <div className='App'>
      <Navbar />
      <div className='home-body'>
        <Featured film={film}/>
        <div className='bottom-body'>
          <Contentlist />
          <UploadList />
          <List />
          {/* <List />
          <List />
          <List />
          <List /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
