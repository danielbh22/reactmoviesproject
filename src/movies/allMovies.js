import {useState, useEffect} from 'react'
import utils from '../moviesUtils'
import MovieComp from './movie'

import React from 'react';

function AllMoviesComp(props)
{

    const [movies, setMovies] = useState([]);

    useEffect(async () =>
    {
      let resp = await utils.getMovies();
      setMovies(resp.data);
    }, [])

    return(
     <div className="App">
        <h3>Movies List</h3> 
 
        {
            movies.map(item =>
            {
                return(
                <div>
                    
                <MovieComp key={item.id} movieData={item} />
                </div>)
            })
        }
        <br/>


  </div>
  );
}

export default AllMoviesComp;