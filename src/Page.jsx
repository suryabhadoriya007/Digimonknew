import React from 'react';
import { makeStyles, createStyles, theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles((theme: theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
   
    <div className='Seconddiv'>
      <div className={classes.root}>
    
      <Grid container spacing={3} >
        <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center"
        >
        <Grid item md={4}  >
        <Typography gutterBottom variant="h5" component="h2">
         SERVICES
          </Typography>
                <Typography className="typo1" className='typo-2'  variant="p" component="h5">
                Project analysis and planning
                Full-stack development
                 QA and maintenance
                </Typography>
               
        </Grid>
            <Grid item xs={4} md={2}>
           <Typography gutterBottom variant="h5" component="h2">
           TECHNOLOGY
          </Typography>
          <Typography gutterBottom className='typo-2' variant="p" component="h5">
          Blog
          </Typography>
          <Typography gutterBottom className='typo-2'  variant="p" component="h5">
          About
          </Typography>
          <Typography gutterBottom  className='typo-2'  variant="p" component="h5">
          Careers
          </Typography>

         
              
               
        </Grid>
        <Grid item xs={4} md={2} className='typo1'>
          <Typography gutterBottom  className='typo-2'  variant="p" component="h5">
          ElasticSearch
          </Typography>
          <Typography gutterBottom className='typo-2'  variant="p" component="h5">
          DoctrineORM
          </Typography>
          <Typography gutterBottom className='typo-2'  variant="p" component="h5">
          RabbitMQ
          </Typography>
          </Grid>
        <Grid item xs={2}  md={2}>
        <Typography gutterBottom   variant="h5" component="h2">
        CLIENT
        </Typography>
        <Typography gutterBottom  className='typo-2'  variant="p" component="h5">
        TMS Outsource
        </Typography>
      
        </Grid>
        <Grid item xs={4}  md={2}>
        <Typography gutterBottom variant="h5" component="h2">
        VISIT
          </Typography>

          <KeyboardArrowRightIcon  />
        <span style={{fontWeight:"900",fontFamily:"Lato"}}> Website</span>
 
          
        </Grid>
       
       
     
      
      <Grid item xs={6}  md={12} className='overview-10' >
      <Typography gutterBottom variant="h3" component="h5">
         Overview
          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          Amelia is a tool for small business owners that run their
           own WordPress websites to automate accepting online appointment bookings 
           and online payments. It supports multiple services and service categories, multiple 
           employees, multiple business locations, and covers numerous functionalities necessary for 
           the smooth workflow of a company that relies on appointments - such as 
          a hairdresser salon or a barbershop, business coach agency, law consultants, etc.
          </Typography>
          </Grid>
          </Grid>
          </Grid>
          </div>
         
          <div className='img_1'>
          <Grid item xs={6}  md={12} className='img-2' >
          <img
                  src={require("../src/Images/image1.png")}
                  alt="facebook"
                

                  
                />
            </Grid>
            
            <Grid item xs={6}  md={12} className='overview-11' >
      <Typography gutterBottom variant="h3" component="h5">
      Timeline
          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          While the idea of the plugin and the first development attempts are dated back in 2014, we officially kicked off the project in Q2 of 2017. The initial ideation and discovery phase took about a couple of months, as we did not want to rush the project, we took time to collect all the information from the existing solutions, as well as the typical pains users have. In June we started the mockup and design phase, and in August the actual development.

By the end of 2017, we had a working core of the booking engine, yet it took another 6 months to polish both the back-end and front-end, test and debug and write user documentation, so the project was officially released in June 2018.

Project is still in its active development phase, we have several major functionalities to finalize and release in next month, and even more to come in future!
          </Typography>
          </Grid>
          </div>
          
          <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center"
  className="imgtime"
        >
          <Grid item xs={6}  md={6} >
             <img
                  src={require("../src/Images/img1.png")}
                  alt="facebook"

                />
                </Grid>
          <Grid item xs={6}  md={6} >
             <img
                  src={require("../src/Images/img2.png")}
                  alt="facebook"

                />
                </Grid>
          </Grid>
          <Grid item md={12} container
  direction="row"
  justify="center"
  alignItems="center"
  className="imgtime"
        >
          <Grid item xs={6}  md={6} >
             <img
                  src={require("../src/Images/img3.png")}
                  alt="facebook"

                />
                </Grid>
          <Grid item xs={6}  md={6} >
             <img
                  src={require("../src/Images/img4.png")}
                  alt="facebook"

                />
                </Grid>
          </Grid>


          <Grid item xs={6}  md={12} className='overview-11' >
      <Typography gutterBottom variant="h3" component="h5">
      Key Challenges

          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          Amelia is one of the few plugins that was built with an ‘enterprise’ approach to architecture and tech solutions.
           The back-end engine of the plugin is built with Domain-Driven Design approach, 
           and uses Slim framework to implement an API that is encapsulated in WordPress. 
           Amelia is extremely cautious to the WordPress infrastructure and is only initializing it’s engine when an Amelia-related API request is received,
            in other cases it does not occupy any runtime server resources. Front-end is built with Vue.js
            , so all the plugin’s pages act as single-page apps.
          </Typography>
          </Grid>
          <Grid>
          <Grid item xs={12} className='imgssd'  md={12} >
             <img
                  src={require("../src/Images/img5.png")}
                  alt="facebook"

                />
                </Grid>
                <Grid item xs={12}  md={12} className='imgssd' >
                 <img
                  src={require("../src/Images/img6.png")}
                  alt="facebook"

                />
                </Grid>
            </Grid>

            <Grid item xs={6}  md={12} className='overview-11' >
      <Typography gutterBottom variant="h3" component="h5">
      Key Results

          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          Amelia received high praises during its initial launch period and during our first
           presentation of the plugin that we performed during WordCamp EU conference in June 2018.
          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          Amelia’s design was added by first customers to many large web design inspiration resources, as well as to the Product Hunt.
          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          Amelia was awarded a Honorable Mention on Awwwards.
          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          First 100 licenses of Amelia were sold within 1.5 months after the release date.
          </Typography>
          <Typography gutterBottom className='typo-2' className='typo-3'  variant="p" component="h5">
          Current Amelia’s rating on CodeCanyon is 5.00.
          </Typography>
          </Grid>

          
          </div>
          
          
          
  );
}