import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardContainer from './Component/CardContainer';
import Detailes from './Component/Detailes';
import Navbar from './Component/Navbar';
import Search from './Component/Search';


function App() {
  const [search, setsearch] = useState("movie")
  const [id, setid] = useState(null)
  const [day, setday] = useState("day")
  const [mData, setmData] = useState([])
  const [loading, setLoading] = useState(false)
  const [valid1,setValid1]=useState(false)

  const [loadingDeatils, setLoadingDeatils] = useState(false)
  useEffect(()=>{
    getData(search,day);
  },[day,search])
  async function getData(ele1,ele2){
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/${ele1}/${ele2}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
    )
    const data=await res.json();
    setmData(data)
    setLoading(true);
  }
  function getDetails(i,em){
    setid(i)
    setValid1(em);
    setLoadingDeatils(true)
  }
 
  return (
    <div className="App">
      <Routes>
        <Route path='/search' element={<Search getDetails={getDetails} e={id} key={id}/>}/>
        <Route path='/' element={
          <div className="container">
        <Navbar search={search} setsearch={setsearch} setday={setday} day={day} />
        <div className="cardholder">
        {loading&&mData.results.map((e,i)=><CardContainer getDetails={getDetails} e={e} key={i}/>)}
        </div>
      </div>

        }/>
        <Route path='/Details' element={<Detailes id={id} valid1={valid1} loadingDeatils={loadingDeatils} search={search} setLoadingDeatils={setLoadingDeatils}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
