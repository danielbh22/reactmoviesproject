

import React, {useEffect, useState } from 'react';
import {Link} from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MoviesWatchedComp from './moviesWatched';
import membersUtils from '../membersUtils';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
    },
    media: {
      height: 240,
    },
  });



function MemberComp(props)
{

  const [id] = useState(props.memberData._id);
  const [link,setLink] = useState("")
  const [error, setError] = useState("");


  useEffect(() =>
  {
    setLink("/editMember/" + id)

  },[id])

  const deleteM = async () =>
  {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try 
      {
        let resp = await membersUtils.deleteMember(id,config);
        alert(resp.data);
      }
      catch (error)
      {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }

  }
    const classes = useStyles();


    return error ? (
      <span className="error-message">{error}</span>
    ) :(
         <div className="App">
     <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.memberData.name}
        </Typography>
        <Typography variant="body2" component="p">
          Email :{props.memberData.email}
          <br />
          City :{props.memberData.city}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to= {link} >Edit</Link>
        <Button onClick={deleteM} size="small">Delete</Button>
      </CardActions>
      <MoviesWatchedComp mData={props.memberData} />
    </Card>

  </div>
  );
}

export default MemberComp;