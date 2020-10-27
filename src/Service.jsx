import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Button from '@material-ui/core/Button';
import {Animated} from "react-animated-css";

function Service() {
    return (
        <>
            
        <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center" 
  className='serviceimg1'>
<div className='service-10'>
<Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
<img
                  src={require("../src/Images/serviceimg1.png")}
                  alt="facebook"
                

                  
                />
                </Animated>
                </div>

            </Grid>
            <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center" 
  >
      <div  className='horizon-0'>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
       <Typography gutterBottom variant="h5" component="h2" className='horizon'>
     Enter into the world of Horizon
     </Typography>
     </Animated>
     </div>
    
     
    
      </Grid>
      <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center" 
  > 
  <div className='horizon-01'>
      <Typography gutterBottom variant="p" component="p" className='horizon-1'>
     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget<br/> dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
         </Typography>
         </div>
         </Grid>
        




         <Grid item md={12} container
  direction="row" className='horizon-2'>
       <Grid item md={6} className='hori1' >
           <div className='exp-1'>
       <Typography gutterBottom variant="h5" component="h2" >
       Our Experience
          </Typography>
          <div className='sashori'>
          <Typography gutterBottom variant="p" component="p" className='subhori'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
           sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
           aliquyam erat, sed diam voluptua. At vero eos et accusam et
           justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
          </Typography>
          </div>
          </div>
            </Grid>
            <Grid item md={6}  className='hori1'>
            <div className='philo-1'>
            <Typography gutterBottom variant="h5" component="h2">
            Our Philosophy
          </Typography>
          <div className='sashori'>
          <Typography gutterBottom variant="p" component="p" className='subhori'>
          Lorem ipsum dolor sit amet, consetetur sadipscing
           elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
           aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
          </Typography>
          </div>
          </div>
            </Grid>
            </Grid>

            <Grid item md={12}  className='dive'>
       <Divider className='divide-10'/>
      </Grid>
       
         

            <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center" 
  className='add-1'

  >
      <div  className='add-0'>
       <Typography gutterBottom variant="h5" component="h2" className='add-1'>
       ADDITIONS
     </Typography>
     </div>
    
     
    
      </Grid>


      <div className='adsearch'>
      <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center" 
  className='adv12'>
    
     <Typography gutterBottom variant="h5" component="h2" className='adser'>
     Advanced Services
     </Typography>
    
      </Grid>
      </div>

     
      <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center" 
  className='adv12'>
      <Typography gutterBottom variant="p" component="p" className='subhori' className='sub12h'  data-aos="fade-up" >
     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.
          </Typography>
          </Grid>
         
          



          <Grid item md={12} container
  direction="row">
<Grid item md={4} className='mobsecleft'>
<div className='philo-1'>
<Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <Typography gutterBottom variant="h5" component="h2">
            User Profiles
          </Typography>
          </Animated>
          <div className='sashori'>
          <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consetur ascing elit, sed do eiusmod magna aliqua.
          </Typography>
          </Animated>
          </div>
          </div>
          <div className='philo-1'>
          <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <Typography gutterBottom variant="h5" component="h2">
            Statistics
          </Typography>
          </Animated>
          <div className='sashori'>
          <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consetur ascing elit, sed do eiusmod magna aliqua.
          </Typography>
          </Animated>
          </div>
          </div>


      </Grid>
      <Grid item md={4} className='mobimg' >
      <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
      <img
                  src={require("../src/Images/servicemobile.png")}
                  alt="facebook"
                

                  
                />
                </Animated>

      </Grid>
      <Grid item md={4} className='mobsecleft' >
      <div className='philo-1'>
      <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <Typography gutterBottom variant="h5" component="h2">
            Organization
          </Typography>
          </Animated>
          <div className='sashori'>
          <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
          <Typography gutterBottom variant="p" component="p" className='subhori-22' >
          Lorem ipsum dolor sit amet, consetur ascing elit, sed do eiusmod magna aliqua.
          </Typography>
          </Animated>
          </div>
          </div>
          <div className='philo-1'>
          <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
            <Typography gutterBottom variant="h5" component="h2">
            Accessibility
          </Typography>
          </Animated>
          <div className='sashori'>
          <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consetur ascing elit, sed do eiusmod magna aliqua.
          </Typography>
          </Animated>
          </div>
          </div>

      </Grid>


      </Grid>

      <Grid item md={12} container
  direction="row">
      <Grid item md={4} >
          <div className='team-9'>
          <AcUnitIcon style={{color:"red"}} />
          <div className='team-10'>
          <Typography gutterBottom variant="h5" component="h2">
          MANAGE TEAMS
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Typography>
          </div>
          </div>

      </Grid>
      <Grid item md={4} > <div className='team-9'>
          <AcUnitIcon style={{color:"red"}} />
          <div className='team-10'>
          <Typography gutterBottom variant="h5" component="h2">
          MANAGE TEAMS
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Typography>
          </div>
          </div></Grid>
      <Grid item md={4} > <div className='team-9'>
          <AcUnitIcon style={{color:"red"}} />
          <div className='team-10'>
          <Typography gutterBottom variant="h5" component="h2">
          MANAGE TEAMS
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Typography>
          </div>
          </div></Grid>
      </Grid>
      <Grid item md={12} container
  direction="row">
      <Grid item md={4} > <div className='team-13'>
          <AcUnitIcon style={{color:"red"}} />
          <div className='team-10'>
          <Typography gutterBottom variant="h5" component="h2">
          MANAGE TEAMS
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Typography>
          </div>
          </div></Grid>
      <Grid item md={4} > <div className='team-13'>
          <AcUnitIcon style={{color:"red"}} />
          <div className='team-10'>
          <Typography gutterBottom variant="h5" component="h2">
          MANAGE TEAMS
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Typography>
          </div>
          </div></Grid>
      <Grid item md={4} > <div className='team-13'>
          <AcUnitIcon style={{color:"red"}} />
          <div className='team-10'>
          <Typography gutterBottom variant="h5" component="h2">
          MANAGE TEAMS
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='subhori-22'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </Typography>
          </div>
          </div></Grid>
      </Grid>


      <div >
      <Grid item md={12} className='map-10' >
      <div className='map-11'>
      <Animated animationIn="bounceInLeft" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
      <Typography gutterBottom variant="h5" component="h2" className='submap-00'>
      Say Hello
</Typography>
</Animated>
<Grid item md={12}  className='linemap'>
<Animated animationIn="bounceInLeft" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
       <Divider className='divide-120'/>
       </Animated>
      </Grid>
      <Animated animationIn="bounceInLeft" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>

          <Typography gutterBottom variant="p" component="p" className='submap'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.
          </Typography>
          </Animated>

          <div className='btnapply'>
          <Animated animationIn="bounceInLeft" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
          <Button className='btnapp-10' variant="outlined">Apply Now</Button>
          </Animated>
          </div>
          <Animated animationIn="bounceInLeft" animationOut="slideOutUp" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
         
<img
                  src={require("../src/Images/servicemap.png")}
                  alt="facebook"
                

                  
                />
                </Animated>
         </div>  





          <Grid item md={12} container
  direction="row" className='mapmangae'>
<Grid item md={4} style={{textAlign:"center"}} className=''>
     <div className='team-10' >
          <Typography gutterBottom variant="h5" component="h2">
          HORIZON CANADA
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='mapdown'>
          123 Main Street / 12345 Canada<br/>
(+00) 555-0199
          </Typography>
          </div>
</Grid>
<Grid item md={4} style={{textAlign:"center"}} className=''>
     <div className='team-10' >
          <Typography gutterBottom variant="h5" component="h2">
          HORIZON CANADA
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='mapdown'>
          123 Main Street / 12345 Canada<br/>
(+00) 555-0199
          </Typography>
          </div>
</Grid>
<Grid item md={4} style={{textAlign:"center"}} className=''>
     <div className='team-10' >
          <Typography gutterBottom variant="h5" component="h2">
          HORIZON CANADA
          </Typography>
          </div>
          <div className='team-11'>
          <Typography gutterBottom variant="p" component="p" className='mapdown'>
          123 Main Street / 12345 Canada<br/>
(+00) 555-0199
          </Typography>
          </div>
</Grid>



  </Grid>




  </Grid>
  
  </div>


 




    
        

        </>
    )
}

export default Service
