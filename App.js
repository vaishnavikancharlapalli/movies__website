import React, { useState,useEffect} from 'react';
import './App.css';
import MovieAPI from "./components/apidata";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCards from "./components/moviess";
// import { Route,BrowserRouter,Link,Switch,Redirect} from 'react-router-dom';
const App = () => {
const[cardsdata,setcardsdata] = useState([])
const[searchval,setsearchval] = useState("")
useEffect(()=>
{
setcardsdata(MovieAPI)
},[])

const dupdata = cardsdata


    // const inputch =(e) =>
    // {
    //   const value = e.target.value
    //   console.log(value)
    //   setsearchval(e.target.value)
    //   let updatedata = cardsdata.filter((item) => item.Title.toLowerCase().includes(searchval.toLowerCase()))
    //   console.log(cardsdata)
    //   setcardsdata(updatedata)        
    // } 

  
    return (
        
             <div className="mainpart">
               <h1 class="head">Movies WebSite</h1>
              <form className="formdata form-group text-center">
                <input className="input" type="text" onChange = {(e) =>
                setsearchval(e.target.value) }placeholder="Enter a movie name"/>
              </form>
              <MovieCards data={cardsdata.filter((val) =>
                {
                  if(searchval =="")
                  {
                    return val
                  }
                  else if(val.Title.toLowerCase().includes(searchval.toLowerCase()))
                  {
                    return val
                  }
                })}/>
        </div>
    
    
    
);
}
 
export default App;