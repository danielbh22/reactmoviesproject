import {Switch, Route ,BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import {useState, useEffect} from 'react'

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";
import LoginScreen from "./components/LoginScreen";
import MainPageComp from './mainPage';
import RegisterScreen from "./components/RegisterScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/ResetPasswordScreen";



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



  return (
    <div className="App">

     <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute exact path="/" component={MainPageComp}/>
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
    </Router>

    </div>
  );
}

export default App;