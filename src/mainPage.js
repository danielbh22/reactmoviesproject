import {Switch, Link ,BrowserRouter as Router } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';
import {useState, useEffect} from 'react'

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";
import MoviesComp from './movies/movies';
import SubscriptionsComp from './subscriptions/subscriptions';


function clear()
{
  localStorage.removeItem("authToken");
  localStorage.removeItem("name");
  window.location.assign('/')
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MainPageComp() {

  const [error, setError] = useState("");
  const [username, setUsername] = useState([]);

    useEffect(() =>
    {
        try 
        {
            setUsername('Hi,' + localStorage.getItem('name'));

        }
        catch (error)
        {
            localStorage.removeItem("authToken");
            setError("You are not authorized please login");
        }
      
    }, []);


  const classes = useStyles();
  return error ? (
    <span className="error-message">{error}</span>
  ) :(
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Movies - Subscriptions Web Site
          </Typography>
          <h5>{username}</h5>
          <Button color="inherit" onClick={() => clear()} >LogOut</Button>
        </Toolbar>
      </AppBar>
      <br/>


     <Router>
        <Link to="/movies">
             <Button color="primary"> Movies </Button>
        </Link>  
          <Link to="/subscriptions">
            <Button  color="primary"> Subscriptions </Button>
            </Link> 

             <br/>
        <Switch>
          <PrivateRoute exact path="/" component={MoviesComp}/>
          <PrivateRoute exact path="/movies" component={MoviesComp} />
          <PrivateRoute exact path="/subscriptions" component= {SubscriptionsComp} />
     
        </Switch>
    </Router>

    </div>
  );
}

export default MainPageComp;