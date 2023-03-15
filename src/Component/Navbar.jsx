import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = ({search,setsearch, setday,day }) => {
  return (
    <>
    <div className="container">
      <div className="navbar">
        <div className="heading"><h1>Movie Search</h1></div>
        <div className="navOption">
          <ul>
            <li>Search</li>
            <li><Link to={"/"}>Home</Link> </li>
          </ul>
        </div>
      </div>
      <div className="inputs">
        <div className="inputComp">
          <div className="comp1"><h1>Popular :</h1></div>
          <div className="comp2">
            <select id="select"  onChange={(e)=>setday(e.target.value)}>
              <option value="day">Today</option>
              <option value="week">This Week</option>
            </select>
          </div>
          <span className="comp3">
            <div className="buttons">
              <input
                label="Movies"
                type="radio"
                name="btn"
                id="movie"
                value="movie"
                onChange={()=>setsearch("movie")}
                defaultChecked  
              />
              <input
                label="Web-Series"
                type="radio"
                name="btn"
                id="series"
                value="series"
                onChange={()=>setsearch("tv")}

               
              />
            </div>
          </span>
        </div>
      </div>
      <div className="cardContainer" id="card2">
      </div>
    </div>
    </>
  )
}

export default Navbar