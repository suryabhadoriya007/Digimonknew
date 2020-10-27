import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Animated} from "react-animated-css";



function Landing() {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light ssdnav">
  <img
                  src={require("../src/Images/digimonk logo.png")}
                  alt="facebook"
                  height="45"
                  width="180"
                />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <nav className="navbar navbar-light ssdnav ml-auto">
  <form className="form-inline">
    <input className="form-control mr-sm-2 searchdd" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success sseerr my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    </div>
</nav>
        
        <div className='Firstdiv'>
     
        <Grid item xs={12}  container
        direction="row">
        <Grid item xs={12} sm={6} md={6}>
            <div className='head-10'>
        <Typography gutterBottom variant="h4" component="h5">
           Amelia
        </Typography>
         
          <Animated animationIn="tada" animationOut="bounce" animationInDuration={400} animationOutDuration={400} isVisible={true}>
       <div>
        <Typography className='land' variant="h" component="h1">
         An Enterprise-Level
         WordPress Appointment
          Booking Plugin
     </Typography>
     </div>
     </Animated>
     </div>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6}>
        <img
                  src={require("../src/Images/home.png")}
                  alt="facebook"
                  
                />
        </Grid>
        </Grid>
        
        </div>

       
        
        
        
            
       
            


    
        
        </>
    )
}

export default Landing
