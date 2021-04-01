import {useState} from 'react'
import utils from '../moviesUtils';

import React from 'react';

function AddMoviesComp(props)
{
    const [movie,setMovie] = useState({});

    const save = async (e) =>
    {
      e.preventDefault();
    
      let  resp  = await utils.addMovie(movie);
      alert(resp.data);
     // this.props.history.push("/allMembers");
    
    }

    //const [id,setId] = useState(0);

    return <div>
        <h3>Add Movie</h3>
        
        <form onSubmit={e => save(e)}> 
            Name: <input type="text" value={movie.name} onChange={e => setMovie({...movie, name : e.target.value } ) } /> <br/>
            Genres: <input type="text" value={movie.genres} onChange={e => setMovie({...movie, genres : e.target.value } ) }/> <br/>
            Image Url: <input type="text" value={movie.img} onChange={e => setMovie({...movie, img : e.target.value } ) }/> <br/>
            Premired: <input type="date" value={movie.premired} onChange={e => setMovie({...movie, premired : e.target.value } ) }/> <br/>
            <input type="submit" value="Save" />
            <input type="button" value="Cancel" />
        </form>


    </div>
}

export default AddMoviesComp