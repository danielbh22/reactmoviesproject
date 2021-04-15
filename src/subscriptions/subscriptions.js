
import {Switch, Link ,BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

import Button from '@material-ui/core/Button';

import AddMemberComp from './addMember';
import AllMembersComp from './allMembers';
import EditMemberComp from './editMember';
import AllMoviesComp from '../movies/allMovies';

import PrivateRoute from "../components/routing/PrivateRoute";



function SubscriptionsComp(props)
{


    return (

      <div>
        <h3>Subscriptions</h3>
        <br/>
        <Router>
          <Link to="/allMembers">
             <Button size="small" color="primary" >
              All Members
            </Button>
        </Link>  
          <Link to="/addMember">
            <Button size="small" color="primary">
              Add Member
            </Button>
            </Link>  <br/>
          
        <Switch>
          <PrivateRoute path="/addMember" component={AddMemberComp} />
          <PrivateRoute path="/allMembers" component={AllMembersComp} />
          <PrivateRoute path="/subscriptions" component={AllMembersComp} />
          <PrivateRoute path="/editMember/:id" component={EditMemberComp} />
          <PrivateRoute path="/allMovies/:name" component={AllMoviesComp} />

        </Switch>
        </Router>
        
   
        
    </div>
    );
}

export default SubscriptionsComp;