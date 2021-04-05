

import React, {useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

import utils from '../moviesUtils';
import SubsWatchedComp from './subsWatched'




const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 240,
    },
  });

function MovieComp(props)
{

    const [id] = useState(props.movieData._id)
    const [link,setLink] = useState("")
    const classes = useStyles();


    
    useEffect(() =>
    {
      setLink("/editMovie/" + id)

    },[id])

    const deleteData = async () =>
    {
      let resp = await utils.deleteMovie(id);
       alert(resp.data);


    }

    return(
         <div className="App">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.movieData.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movieData.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Geners : { props.movieData.genres}
          </Typography>
        </CardContent>
      </CardActionArea>
      <SubsWatchedComp movieData={id} />
      <CardActions>
      <Link to= {link} >Edit</Link>
        <Button size="small" color="primary" onClick={deleteData} >
          Delete
        </Button>
      </CardActions>
    </Card>

  </div>
  );
}

export default MovieComp;