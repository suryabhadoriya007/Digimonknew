import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Card from './Card';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
   
    backgroundColor: theme.palette.background.paper,
    
  },
  
}));

const Data= [{value:"Social Media",index:1},{value:"E-commerce",index:2},{value:"Gaming",index:3},{value:"hello4",index:4},{value:"hello4",index:5},{value:"hello4",index:6},{value:"hello4",index:7},{value:"hello4",index:8},{value:"hello4",index:9},{value:"hello4",index:10},{value:"hello4",index:11},{value:"hello4",index:12},{value:"hello4",index:13}]

export default function CheckboxListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
 

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
   
  <div className='col-md-12'>
    <div className='row'>
   

      <div className='col-md-3 list-12' >
     
      
      <List dense className={classes.root }>
      <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
         Category
          </Typography>
      
      {Data.map((item) => {
        const labelId = `checkbox-list-secondary-label-${item.index}`;
       
        return ( 
          
        
      
         
          <ListItem key={item.index}  >
           
            <ListItemText id={labelId} primary={item.value} />
            <ListItemSecondaryAction>
           
            
              <Checkbox
                edge="end"
                onChange={handleToggle(item.index)}
                checked={checked.indexOf(item.index) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
              
            </ListItemSecondaryAction>
          
          </ListItem>
         
         
        );
      })}
      
        </List>
    
     
 </div>
 

<div className='col-md-9 cradcad'>
<Card/>



</div>


    </div>
    </div>
    
   
  </>
   
  );
}
