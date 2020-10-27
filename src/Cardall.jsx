import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
var arr = ['  ',"Website builder,",'  ', "Content Builder,",'  ',"Gallery,",'  ',"Wordpress", ]; 
export default function ImgMediaCard() {
  const classes = useStyles();


  var newArr = arr.map(function(val, index){ 
    return {key:index, value:val*val}; 
}) 



  return (
    <>
    
    <Card className={classes.root}>
        <Main/>
      <div classsName='col-md-12'>
      <div className='row'>
        <div className='col-md-6 '>
       
      <CardActionArea style={{display:"flex",aligniteams:"center",justifyContent:"center",  }}>
      <CircularProgress color="secondary" />
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          src={require("../src/Images/web1.jpg")}
          alt="facebook"
          width="180"
        />
         </CardActionArea>
         <Typography variant="body2" color="textSecondary" component="p">
           Tags:{arr}
          </Typography>
         </div>
         <div className='col-md-6'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Title
          </Typography>
          <Typography gutterBottom variant="p" component="p">
         Software Version:
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Typography gutterBottom variant="p" component="p">
         Technology:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Typography gutterBottom variant="p" component="p">
        File Type Included:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Javascript JS CSS PHP LESS
          </Typography>
        </CardContent>
     
        <CardActions>



      
     <Link to="/Mainland">
         <Button  variant="contained" color="primary" >
       View
      </Button>
      </Link> 
     
  
     
     
    
    
    
     
      </CardActions>
{/*  
      <CircularProgress color="secondary" /> */}
      </div>
      </div>
      </div>
    </Card>
     {/* <div className='col-12 cirloader'>
    <CircularProgress color="secondary" style={{textAlign:"center" }} />
    </div> */}
    </>
  );
}