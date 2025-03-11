import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css'


const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([])
  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    };
    document.addEventListener("keydown", handleKeyDown)
    return () => {
        document.removeEventListener("keydown", handleKeyDown)
    }
}, [search]) //every time search value changes it reruns
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI5MzY0ZGEwMjBjYmQ1NTJjZWFiZTYyZGVkMjUyMSIsIm5iZiI6MTczOTM3NzIyMS43NzcsInN1YiI6IjY3YWNjYTQ1NTMzNTNmOWJiYTM2Y2RhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I8F4L_AtRzIdNatpsmHwnkuCewA8DNupLsRk1JZ1E58'
    }
  };
  
    const handleSearch = async () => {
    if(search) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setSearchResults(res))
        .catch(err => console.error(err));
      }
    }
  return (
    <div className="search">
    <div className='search-left'>
       <div className="searchbar">
        <input type="search" className='searchTerm' placeholder='Search' name="fname" autoFocus required
        onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <button type='submit' className='searchButton' onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
       </button>
       </div>
    </div>
    <div className="search-right">
        
    </div>
    </div>
   
  )
}

export default Search