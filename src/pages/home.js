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
  // const [movie, setMovie] = useState([])

  // useEffect(() => {
  //     const getRandomList = async () => {
  //         try {
  //             const res = await axios.get(`lists${type ? '?type='+ type : ''}${genre ? '&genre='+ genre : ''}`)
  //             setLists(res.data)
  //         } catch (err) {
  //             console.log(err )
  //         }
  //     };
  //     getRandomList()
  // }, [type, genre])

  const getRandomList = async () => {
    try {
      const { movie } = await axios
        .get('http://127.0.0.1:8000/api/movie/allmovies')
        .then((response) => {
          console.log(response.data)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRandomList()
  }, [])

  const getRandom = async () => {
    try {
      const { movie } = await axios
        .get('http://127.0.0.1:8001/api/movie/allmovies')
        .then((response) => {
          console.log('data:', response?.data?.data)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRandom()
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <div className='home-body'>
        <Featured />
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
