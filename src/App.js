import React from 'react';
import Main from './Main';
import './index.css';
import Listbox from './Listbox';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Mainland from './Mainland';
import Cardall  from './Card'
import Page from './Page';
import {BrowserRouter,Route,Switch} from  "react-router-dom";
import Service from './Service';
import Webdevelopment from './Webdevelopment';

function App() {
  return (
   <>
   <div>
    
     {/* <BrowserRouter>
<Switch>
  
<Route exact path="/"  component={Main}/>
<Route exact path="/Mainland"  component={Mainland}/>
<Route exact path="/Cardall"  component={Cardall}/>
<Route exact path="/Cardall"  component={Listbox}/>

</Switch>
</BrowserRouter> */}

<Service/>

{/* <Webdevelopment/> */}


    </div>   
   </>
  );
}

export default App;
