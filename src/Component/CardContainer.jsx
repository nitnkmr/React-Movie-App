import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
const CardContainer = ({e,getDetails}) => {
  return (
    <div className="cardContainer" id="card2">
        <Link to={"/Details"} onClick={()=>getDetails(e.id)}>
        <div className="card" id="innercard">
          <div className="circle">{(e.vote_average*10).toFixed(1)}</div>
          <img src={`https://image.tmdb.org/t/p/w154${e.poster_path}`} alt=""/>
          <div className='info'>
            <h2>{e.original_title}{e.name}</h2>
            <p>Genere</p>
            <h3>{e.release_date}{e.first_air_date}</h3>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default CardContainer