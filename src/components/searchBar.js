import React from 'react'
// import { Search } from '@material-ui/icons'
import '../css/searchBar.modules.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SearchBar = ({placeholder, data}) => {

    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (e) => {
        const movie = e.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(movie.toLowerCase())
        });
        if (movie === ''){
            setFilteredData([])
        } else  {
        setFilteredData(newFilter)
    }
    }
    return (
        <>
            <div className="search-input">
            <input type="text" className='input' placeholder={placeholder} onChange={handleFilter}/>
            </div>
            {filteredData.length != 0 && (
            <div className="data-result">
                {filteredData.slice(0, 7).map((value, key) => {
                    return <div className='search-link' key={key}><Link to={`/content/${value._id}`} style={{textDecoration: 'none'}} >
                        <p className='p'>{value.title}</p>
                        </Link></div>
                })}
            </div>
            )}
        </>
    )
}

export default SearchBar