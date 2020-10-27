import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import WebAssetIcon from '@material-ui/icons/WebAsset';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import WebIcon from '@material-ui/icons/Web';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    
    
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  
  }

}));


export default function SimplePaper() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>

      <Paper elevation={3} style={{textAlign:"center"}}  src={require("../src/Images/web.jpeg")} >
   
      <AllInboxIcon style={{ color:"#f50057"}}/>
      
      <div className='card-10'>
      <Link to="/Cardall">
      <Button color="primary">Browse All Items</Button>
      </Link>
      <h5>Best Seller</h5>
      <p>Browse New</p>
      </div>
     
        </Paper>
      
        <Paper elevation={3} style={{textAlign:"center"}}  >
      <WebIcon style={{ color:"#f50057"}}/>
      <div className='card-10'>
      <Button color="primary">Web Development</Button>
      <h5>Best Seller</h5>
      <p>Browse New</p>
      </div>
     
        </Paper>
        <Paper elevation={3} style={{textAlign:"center"}}  >
      <SmartphoneIcon style={{ color:"#f50057"}} />
      <div className='card-10'>
      <Button color="primary">Mobile Development</Button>
      <h5>Best Seller</h5>
      <p>Browse New</p>
      </div>
     
        </Paper>
        <Paper elevation={3} style={{textAlign:"center"}}  >
      <GraphicEqIcon style={{ color:"#f50057"}}/>
      <div className='card-10'>
      <Button color="primary">Browse Graphics</Button>
      <h5>Best Seller</h5>
      <p>Browse New</p>
      </div>
     
        </Paper>
     
    </div>
   
  );
}