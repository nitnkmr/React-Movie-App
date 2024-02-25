import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Search.css"

const Search = ({getDetails,e}) => {
    const [data, setdata] = useState({})
    const [search, setsearch] = useState("")
    const [valid,setValid]=useState(false)
    const [valid1,setValid1]=useState(true)
    const [category, setcategory] = useState("movie")
    useEffect(()=>{
        getmovie(category,search)
        console.log(data);
        
    },[valid,category,search])
    function onhello(){
        
        setValid(!valid)
    }
    async function getmovie(selectvalue,inputvalue){
        const res= await fetch(`https://api.themoviedb.org/3/search/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${inputvalue}`)
        const obj=await res.json()
        setdata(obj)   
    }
    
    return (
        <div className="container3">
            <div className="navbar">
                <div className="heading">
                    <h1>Movie Search</h1>
                </div>
                <div className="navOption">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                    </ul>
                </div>
            </div>
            <div className="inputs">
                <form action="" id="form" onSubmit={(e)=>e.preventDefault()}>
                    <select name="" id="catagory" onChange={(e)=>setcategory(e.target.value)}>
                        <option value="movie" id="movie">Movie</option>
                        <option value="tv" id="tv">Series</option>
                    </select>
                    <input type="text" id="searchbar" value={search} onChange={(e)=>setsearch(e.target.value)}/>
                    <button id="btn1" onClick={()=>onhello()}>Search</button>
                </form>
            </div>
            <div id="card">
                {
                (valid)? data.results.map((ele,i)=><Link to={"/Details"} onClick={()=>getDetails(ele.id,valid1)}>
                <div className="card" key={i}>
                <div className="circle">{(ele.vote_average * 10).toFixed(1)}<span>%</span></div>
                <img src={"https://image.tmdb.org/t/p/w154"+ele.poster_path} alt="img" />
                <div><h4>{ele.title}</h4>
                    <h4>{ele.original_name}</h4>
                    <p>Sci-fi || romantic</p>
                    <h3>{ele.release_date}{ele.first_air_date}</h3>
                </div>
            </div></Link>):null}
                

            </div>
        </div>
    )
}

export default Search