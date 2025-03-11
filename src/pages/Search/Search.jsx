import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
import { Link } from 'react-router-dom';
import Loading from './Loading';


const Search = () => {
const [inputValue, setInputValue] = useState('');
const [loading, setLoading] = useState(false);
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
      setLoading(true);
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => {

          setSearchResults(res.results);
          setLoading(false);
          
          })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
      
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
        onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown}/>
        <button type='submit' className='searchButton' onClick={handleSearch}>
        { loading ? <Loading /> :
        <FontAwesomeIcon icon={faMagnifyingGlass} />}
       </button>
       </div>
    </div>
    <div className="search-right">
<div className="card-list-search">
  {loading ? (<Loading />) : searchResults.length > 0 ? (
searchResults.map((card) => (
 <Link to={`/player/${card.id}`} className="card" key={card.id}>
  <img src={
                    card.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                      : card.poster_path
                      ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
                      : "https://via.placeholder.com/500x281?text=No+Image"
                  }></img>
  <p>{card.original_title}</p>
 </Link>
))
  ) : (
    <h1>No results for "{searchQuery}"</h1>
  )}
  
</div>
    </div>
    </div>
)}

export default Search