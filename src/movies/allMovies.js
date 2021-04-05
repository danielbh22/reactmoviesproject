import {useState, useEffect} from 'react'
import utils from '../moviesUtils'
import MovieComp from './movie'

import React from 'react';

function AllMoviesComp(props)
{

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");



    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () =>
    {
      if (props.match.params.name!=null)
      {
        let name = props.match.params.name;
        name.replace(/%20/g, " ")
        setSearch(name)
        getData();

      }
      else
      {
        let resp = await utils.getMovies();
        setMovies(resp.data);
      }

    }, [search])


    const getData = async () =>
    {
      if(search!==null)
      {
        let resp = await utils.searchMovies(search);
        setMovies(resp)
      }
      else{
        let resp = await utils.getMovies();
        setMovies(resp.data);

      }

    }

    return(
     <div className="App">
        Search : <input type="text" value = {search} onChange={e => setSearch(e.target.value)} /> 
        <input type="button" value="Get Data" onClick={getData} /><br/><br/>
        <br/>

        <h3>Movies List</h3> 

 
        {
            movies.map(item =>
            {
                return(
                <div>
                    
                <MovieComp key={item._id} movieData={item} /><br/>
                </div>)
            })
        }
        <br/>


  </div>
  );
}

export default AllMoviesComp;