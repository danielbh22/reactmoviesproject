import {useState} from 'react'
import utils from '../moviesUtils';

import React from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";


function AddMoviesComp(props)
{
    const [movie,setMovie] = useState({});
    const history = useHistory()


    const save = async (e) =>
    {
      e.preventDefault();
    
      let  resp  = await utils.addMovie(movie);
      alert(resp.data);
      history.push("/allMovies");
    
    }


    return <div>
        <h3>Add Movie</h3>
        
        <form onSubmit={e => save(e)}> 
            Name: <input type="text" value={movie.name} onChange={e => setMovie({...movie, name : e.target.value } ) } /> <br/>
            Genres: <input type="text" value={movie.genres} onChange={e => setMovie({...movie, genres : e.target.value } ) }/> <br/>
            Image Url: <input type="text" value={movie.img} onChange={e => setMovie({...movie, img : e.target.value } ) }/> <br/>
            Premired: <input type="date" value={movie.premired} onChange={e => setMovie({...movie, premired : e.target.value } ) }/> <br/>
            <input type="submit" value="Save" />
            <Link to= "/allMovies" >Cancel</Link>
        </form>


    </div>
}

export default AddMoviesComp