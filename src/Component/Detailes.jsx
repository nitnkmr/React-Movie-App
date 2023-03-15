import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./detailing.css"
const Detailes = ({id,loadingDeatils,setLoadingDeatils,search}) => {
  const [first, setfirst] = useState({})
  const [first1, setfirst1] = useState(false)
  useEffect(()=>{

    getDetails(id,search);
  },[id])
  async function getDetails(movieid){
  const res=await fetch(`https://api.themoviedb.org/3/${search}/${movieid}?api_key=05115a04b06d974d0210b99b0228bd44`);
  const data=await res.json();
  setfirst(data)
  setfirst1(true)
  console.log(data);
  }
  return (
    <div className='deContainer'>
      <div className="poster" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w1280${first.backdrop_path}")`}}>
        <span className="back"><Link to={"/"}>X</Link></span>
        <div className="blurring">
          <div className="profile">
            <div className="img">
              <img src={"https://image.tmdb.org/t/p/w154"+first.poster_path} alt="" />
            </div>
            <div className="title">{first.original_title}</div>
          </div>
          <div className="information">
            <div className="budget">Budget : {first.budget} $</div>
            <div className="revenue">Box Office Collection : {first.revenue} $</div>
            <div className="status">Status : {first.status}</div>
            <div className="status">Language : {first.original_language}</div>
            <div className="status">Duration : {first.runtime} min</div>
            <div className="storyline">{first.overview}</div>
          </div>
        </div>
        </div>  
      <div className="casting"></div>
    </div>
  )
}

export default Detailes