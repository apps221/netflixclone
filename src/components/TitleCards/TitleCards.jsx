import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/assets/cards/Cards_data'
import { Link } from 'react-router-dom';
const TitleCards = ({title, category}) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI5MzY0ZGEwMjBjYmQ1NTJjZWFiZTYyZGVkMjUyMSIsIm5iZiI6MTczOTM3NzIyMS43NzcsInN1YiI6IjY3YWNjYTQ1NTMzNTNmOWJiYTM2Y2RhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I8F4L_AtRzIdNatpsmHwnkuCewA8DNupLsRk1JZ1E58'
    }
  };
  const [apiData, setApiData] = useState([]);
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    
  },[])
 
 
  /*const cardsRef= useRef();
const handleWheel = (event)=> {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(() => {
cardsRef.current.addEventListener('wheel', handleWheel);
},[])*/
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netlfix"}</h2>
      <div className="card-list" /*ref={cardsRef}*/>
        {apiData.map((card, index) => {
          return (
         <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
         </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards