import {useState} from 'react'

import React from 'react';

function AddMoviesComp(props)
{

    //const [id,setId] = useState(0);
    const [movie,setMovie] = useState({});

    return <div>
        <h3>Add Movie</h3>
        
        <form> 
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