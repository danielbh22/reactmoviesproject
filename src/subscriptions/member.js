

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MoviesWatchedComp from './moviesWatched';
import membersUtils from '../membersUtils';
import { useState } from 'react' 

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

  const deleteM = async () =>
  {
    let resp = await membersUtils.deleteMember(id);
    alert(resp.data);

  }
    const classes = useStyles();


    return(
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
        <Button size="small">Edit</Button>
        <Button onClick={deleteM} size="small">Delete</Button>
      </CardActions>
      <MoviesWatchedComp mData={props.memberData} />
    </Card>

  </div>
  );
}

export default MemberComp;