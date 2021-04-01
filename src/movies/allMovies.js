import {useState, useEffect} from 'react'
import utils from '../moviesUtils'
import MovieComp from './movie'

import React from 'react';

function AllMoviesComp(props)
{

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [num, setNum] = useState(0)


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () =>
    {
      let resp = await utils.getMovies();
      setMovies(resp.data);
    }, [num])


    const getData = async () =>
    {
      if(search!==null)
      {
        let resp = await utils.searchMovies(search);
        setMovies(resp)
      }
      else{
        let n = num;
        setNum(n++)

      }

    }

    return(
     <div className="App">
        Search : <input type="text" onChange={e => setSearch(e.target.value)} /> 
        <input type="button" value="Get Data" onClick={getData} /><br/><br/>
        <br/>

        <h3>Movies List</h3> 

 
        {
            movies.map(item =>
            {
                return(
                <div>
                    
                <MovieComp key={item.id} movieData={item} /><br/>
                </div>)
            })
        }
        <br/>


  </div>
  );
}

export default AllMoviesComp;