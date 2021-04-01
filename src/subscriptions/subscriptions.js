
import {Switch, Route, Link ,BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

import Button from '@material-ui/core/Button';

import AddMemberComp from './addMember';
import AllMembersComp from './allMembers';




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
          <Route path="/addMember" component={AddMemberComp} />
          <Route path="/allMembers" component={AllMembersComp} />
        </Switch>
        </Router>
        
   
        
    </div>
    );
}

export default SubscriptionsComp;