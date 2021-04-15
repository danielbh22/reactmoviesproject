import {Switch, Route, Link ,BrowserRouter as Router } from 'react-router-dom'
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
import LoginScreen from "./components/LoginScreen";
// import RegisterScreen from "./components/screens/RegisterScreen";
// import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
// import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

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

function App() {

  
  const [username, setUsername] = useState([]);
    useEffect(() =>
    {
    

        if(localStorage.getItem('name')=== null)
        {
          return setUsername('Hi, Guest');
        }
        else{
          return setUsername('Hi,' + localStorage.getItem('name'));
        }
    
     
      
    }, [username]);

  

  


  const classes = useStyles();
  return (
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
             <Button color="primary">
              Movies
            </Button>
        </Link>  
          <Link to="/subscriptions">
            <Button  color="primary">
            subscriptions
            </Button>
            </Link> 

             <br/>
        <Switch>
        <PrivateRoute exact path="/" component={MoviesComp}/>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute exact path="/movies" component={MoviesComp} />
          <PrivateRoute exact path="/subscriptions" component= {SubscriptionsComp} />
          {/* <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          /> */}
        </Switch>
    </Router>

    </div>
  );
}

export default App;