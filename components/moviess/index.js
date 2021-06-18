import React, { useState} from 'react';

const MovieCards = (props) => {
    const [index,setindex] =useState(null)
    const origin = props.data
    const update = (id)=>
    {
      setindex(id)
    }
    
    return ( 
        
        <div className="borders moviegrids m-auto d-flex justify-content-around flex-wrap align-content-md-center rounded mx-auto d-block">
        {origin.map((item) =>
         (
         <div id={item.imdbID} className= {index == item.imdbID ? "card overdata" : "card"} onClick = {() =>update(item.imdbID)}>
        <img 
      //   onClick = {clickfun}
          className =  "poster"
        src={item.Poster}/>
        <h3 className="hoverhead ">
          {item.Title}
        </h3>
        </div>
          ))}
       </div>

     );
}
 
export default MovieCards;