/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import utils from '../subscriptionsUtils'
import Button from '@material-ui/core/Button';
import moviesUtils from '../moviesUtils';


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import 'date-fns';
import { TextField } from '@material-ui/core';


import React from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function MoviesWatchedComp(props)
{
    const [movies, setMovies] = useState([]);
    const [subs, setSubs] = useState([]);
    const [sub, setSub] = useState({});


    const [isVisible, setIsVisible] = useState(false);

    const classes = useStyles();

    

    useEffect(async () =>
    {
      let resp = await utils.getSubscriptions();
      setSubs(resp.data);

      let resp2 = await moviesUtils.getMovies();
      setMovies(resp2.data);


    }, [])


    const save = async (e) =>
    {
      e.preventDefault();
        
      let  resp  = await utils.addSubscription(sub);
      alert(resp.data);
     // this.props.history.push("/allMembers");
    
    }


    return(
     <div className="App">
        <h3>Movies Watched</h3> 
        <Button size="small" onClick={() => {
            if (isVisible == true)
            {
             setIsVisible(false) 
            }
            else
            {
                setIsVisible(true) 
 
            }  }} >Subscribe to new movie</Button><br/>
   


        <div style={{ display: isVisible ? "block" : "none" }}>


            <h4>Add new movie</h4>
     

      <form onSubmit={e => save(e)} className={classes.container} noValidate>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Movie</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="moviename"
          value={sub.movieid} 
          onChange={e => setSub({...sub , movieid : e.target.value}) }
          label="Movie"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            movies.map(item =>
            {
                return(
                    <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                )
            })
        }
          
        </Select>
      </FormControl>
        <TextField
            id="date"
            label="Watched"
            type="date"
            defaultValue=""
            value={sub.date}
            onChange={e => setSub({...sub, date : e.target.value } ) }
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        /><br/>
        <TextField 
        label="ID" 
        id="memberid" 
        type="text" 
        value={props.mData._id} 
        onChange={e => setSub({...sub , memberid : e.target.value}) } 
        className={classes.textField}
        /><br/>
        <input type="submit" value="Subscribe" />
        </form>
        <br/>

        


        </div>



        <ul>
        {
        subs.map(item =>
                {
                    if(item.memberid == props.mData._id)
                    {
                        return (
                         <li>movie id: {item.movieid} , date : {item.date}</li>
                     )
                    }
                    else{
                        return null
                    }
                     
                }
               

           )

        }
        </ul>
    
        <br/>


  </div>
  );
}

export default MoviesWatchedComp;