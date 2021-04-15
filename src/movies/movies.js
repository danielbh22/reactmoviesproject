
import {Switch, Link ,BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
import PrivateRoute from "../components/routing/PrivateRoute";

import Button from '@material-ui/core/Button';


import AddMoviesComp from './addMovies'
import AllMoviesComp from './allMovies'
import EditMoviesComp from './editMovie'

function MoviesComp(props)
{


    return  (

      <div>
        <h3>Movies</h3>
        <br/>
        <Router>
          <Link to="/movies/allMovies">
             <Button size="small" color="primary" >
              All Movies
            </Button>
        </Link>  
          <Link to="/movies/addMovies">
            <Button size="small" color="primary">
              Add Movies
            </Button>
            </Link>  <br/>
          
        <Switch>
          <PrivateRoute path="/movies/addMovies" component={AddMoviesComp} />
          <PrivateRoute path="/movies/allMovies" component={AllMoviesComp} />
          <PrivateRoute path="/movies" component={AllMoviesComp} />
          <PrivateRoute path="/movies/editMovie/:id" component={EditMoviesComp} />
          <PrivateRoute path="/movies/allMovies/:name" component={AllMoviesComp} />
        </Switch>
        </Router>
   
        

        
        
    </div>
    );
}

export default MoviesComp;