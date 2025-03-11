import React from 'react'

const TitleCard = () => {
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

export default TitleCard