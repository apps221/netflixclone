import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'
const Player = () => {
  const {id} = useParams();
const [apiData, setApiData] = useState({})
const [movieDetails, setMovieDetails] = useState({});
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(res => res.json())
  .then(res => setMovieDetails(res))
  .catch(err => console.error(err));
  },[])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI5MzY0ZGEwMjBjYmQ1NTJjZWFiZTYyZGVkMjUyMSIsIm5iZiI6MTczOTM3NzIyMS43NzcsInN1YiI6IjY3YWNjYTQ1NTMzNTNmOWJiYTM2Y2RhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I8F4L_AtRzIdNatpsmHwnkuCewA8DNupLsRk1JZ1E58'
    }
  };
  
  
  return (
    <div className='player'>
    <Link to='/'><img src={back_arrow_icon} alt="" /></Link>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder={0} allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date: {apiData.published_at}</p>
        <p>Name: {movieDetails.original_title}</p>
        <p>Description: {movieDetails.overview}
        </p>
      </div>
    </div>
  )
}

export default Player