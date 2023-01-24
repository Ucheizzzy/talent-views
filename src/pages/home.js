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
import { RestApi } from '../api/RestApi'
// import { Modal } from '../components/modal';

const Home = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)
<<<<<<< HEAD
  const getRandom = async () => {
    try {
      const { movie } = await axios
        .get('http://127.0.0.1:8000/api/movie/allmovies')
        .then((response) => {
          console.log('data:', response?.data?.data)
=======
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
>>>>>>> dcbb4b1925580dea6a73eddf6c09c99597eb5c0d
        })
    } catch (err) {
      console.log(err)
    }
  }
<<<<<<< HEAD
=======
  console.log(user?.data?.user)

>>>>>>> dcbb4b1925580dea6a73eddf6c09c99597eb5c0d
  useEffect(() => {
    getRandom()
  }, [])
  return (
    <div className='App'>
      <Navbar />
      <div className='home-body'>
<<<<<<< HEAD
        <Featured />
=======
        <Featured film={film}/>
>>>>>>> dcbb4b1925580dea6a73eddf6c09c99597eb5c0d
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
