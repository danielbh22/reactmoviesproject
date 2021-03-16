
import {Switch, Route, Link ,BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

import Button from '@material-ui/core/Button';


import AddMoviesComp from './addMovies'
import AllMoviesComp from './allMovies'





function MoviesComp(props)
{


    return (

      <div>
        <h3>Movies</h3>
        <br/>
        <Router>
          <Link to="/allMovies">
             <Button size="small" color="primary" >
              All Movies
            </Button>
        </Link>  
          <Link to="/addMovies">
            <Button size="small" color="primary">
              Add Movies
            </Button>
            </Link>  <br/>
          
        <Switch>
          <Route path="/addMovies" component={AddMoviesComp} />
          <Route path="/allMovies" component={AllMoviesComp} />
        </Switch>
        </Router>
   
        

        
        
    </div>
    );
}

export default MoviesComp;