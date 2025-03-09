import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css'


const Search = () => {
  return (
    <div className="search">
    <div class='search-left'>
       <div className="searchbar">
        <input type="text" class='searchTerm' placeholder='Search' />
        <button type='submit' class='searchButton'>
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