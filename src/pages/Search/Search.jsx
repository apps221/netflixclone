import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
import { Link } from 'react-router-dom';


const Search = () => {
const [inputValue, setInputValue] = useState('');
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([])
const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
  }
};
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI5MzY0ZGEwMjBjYmQ1NTJjZWFiZTYyZGVkMjUyMSIsIm5iZiI6MTczOTM3NzIyMS43NzcsInN1YiI6IjY3YWNjYTQ1NTMzNTNmOWJiYTM2Y2RhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I8F4L_AtRzIdNatpsmHwnkuCewA8DNupLsRk1JZ1E58'
      }
    };
    if(searchQuery) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setSearchResults(res.results))
        .catch(err => console.error(err));
      }
}, [searchQuery]) //every time search value changes it reruns
  
    const handleSearch = async () => {
    setSearchQuery(inputValue)
    }
  return (
    <div className="search">
    <div className='search-left'>
       <div className="searchbar">
        <input type="search" className='searchTerm' placeholder='Search' name="fname" autoFocus required
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}/>
        <button type='submit' className='searchButton' onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
       </button>
       </div>
    </div>
    <div className="search-right">
<div className="card-list-search">
{searchResults ? {searchResults.map((card, index) => {
          return (
         <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path || `https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
          <p>{card.original_title}</p>
         </Link>
          )
        })} : 
        return (
          <h1>No Results for {searchQuery}</h1>
        )}

</div>
    </div>
    </div>
   
  )
}

export default Search