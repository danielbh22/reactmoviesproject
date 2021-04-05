import {useEffect, useState} from 'react'
import utils from '../moviesUtils';

import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";



import React from 'react';

function EditMoviesComp(props)
{
    const history = useHistory()

    const [movie,setMovie] = useState({});
    const [id,setId] = useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () =>
    {
      setId(props.match.params.id)

      let resp = await utils.getMovie(id);
      setMovie(resp.data);
    }, [id, props.match.params.id])

   
    
    const update = async (e) =>
    {
      e.preventDefault();
    
      let  resp  = await utils.updateMovie(id,movie);
      alert(resp.data);
      history.push("/allMovies");
    
    }

    

    return (<div>
        <h3>Edit Movie</h3>{movie.name}
        
        <form onSubmit={e => update(e)}> 
            Name: <input type="text" value={movie.name} onChange={e => setMovie({...movie, name : e.target.value } ) } /> <br/>
            Genres: <input type="text" value={movie.genres} onChange={e => setMovie({...movie, genres : e.target.value } ) }/> <br/>
            Image Url: <input type="text" value={movie.image} onChange={e => setMovie({...movie, image : e.target.value } ) }/> <br/>
            Premired: <input type="date" value={movie.premiered} onChange={e => setMovie({...movie, premiered : e.target.value } ) }/> <br/>
            <input type="submit" value="Update" />
            <Link to= "/allMovies" >Cancel</Link>

        </form>


    </div>)
}

export default EditMoviesComp