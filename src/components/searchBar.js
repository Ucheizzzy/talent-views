import React, { useEffect } from 'react'
// import { Search } from '@material-ui/icons'
import '../css/searchBar.modules.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SearchItem from '../components/searchItem'

const SearchBar = ({placeholder, data}) => {
    const params = new URLSearchParams()
    const history = useNavigate()

    // const content = new URLSearchParams(window.location.search).get("query");
    // console.log(content)

    // const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const handleFilter = (e) => {
        e.preventDefault()
        // const movie = e.target.value
        setSearchInput(e.target.value);
        history(`/search?q=${searchInput}`)
    //     const newFilter = data.filter((value) => {
    //         return value.title.toLowerCase().includes(movie.toLowerCase()) || value.director.toLowerCase().includes(movie.toLowerCase()) || value.description.toLowerCase().includes(movie.toLowerCase()) || value.genre.toLowerCase().includes(movie.toLowerCase())
    //     });
    //     if (movie === ''){
    //         setFilteredData([])
    //     } else  {
    //     setFilteredData(newFilter)
    // }
    }

    useEffect(() => {
        const params = new URLSearchParams();
        if (searchInput) {  
          params.append("q", searchInput);
          history({ search: params.toString() });
        } else {
          params.delete("q");
        }
      }, [searchInput, history]);
    return (
        <>
            <div className="search-input">
            <input type="text" className='input' value={searchInput} placeholder={placeholder} onChange={handleFilter}/>

            {/* {
                data.filter((content) => {
                    if (searchInput === "") {
                        return content
                    } else if (content.title.toLowerCase().includes(searchInput.toLowerCase()) || content.director.toLowerCase().includes(searchInput.toLowerCase()) || content.description.toLowerCase().includes(searchInput.toLowerCase()) || content.genre.toLowerCase().includes(searchInput.toLowerCase())) {
                        return content
                    }  
                    // sorting in alphabetical order
                    }).sort((a, b) => a.title > b.title ? 1 : -1).map((content) => {
                        return (
            <div className='search-list-wrapper'
            >
                <SearchItem content={content}/>
            </div>
                        );
            })} */}



            
            {/* {filteredData.length !== 0 && (
            <div className="data-result">
                {filteredData.slice(0, 7).map((value, key) => {
                    return <div className='search-link' key={key}>
                        <Link to={`/content/${value._id}`} style={{textDecoration: 'none'}} >
                        <p className='p'>{value.title}</p>
                        </Link></div>
                })}
            </div>
            )} */}
            </div>
        </>
    )
}

export default SearchBar