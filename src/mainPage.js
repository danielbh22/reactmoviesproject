
import {Switch, Route, Link ,BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

import Button from '@material-ui/core/Button';


import MoviesComp from './movies/movies';
import SubscriptionsComp from './subscriptions/subscriptions';





function MainPageComp(props)
{


    return (

      <div>
        <br/>
        <Router>
          <Link to="/movies">
             <Button size="small" color="primary">
              Movies
            </Button>
        </Link>  
          <Link to="/subscriptions">
            <Button size="small" color="primary">
            subscriptions
            </Button>
            </Link> 
            <Link to="/userManagement">
             <Button size="small" color="primary">
             User Management
            </Button>
        </Link>  
        <Link to="/logOut">
             <Button size="small" color="primary">
              Log Out
            </Button>
        </Link>  
            
             <br/>
          
        <Switch>
          <Route path="/movies" component={MoviesComp} />
          <Route path="/subscriptions" component= {SubscriptionsComp} />
          <Route path="/userManagement"  />
          <Route path="/logOut"  />
        </Switch>
        </Router>
   
        

        
        
    </div>
    );
}

export default MainPageComp;