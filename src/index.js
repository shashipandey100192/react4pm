import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import Aboutpage,{Abc} from './About';
import Contactus from './Contactus';
import "./style.css";
import Bootstrappage from './Bootstrappage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Bootstrappage></Bootstrappage>
    <Aboutpage/>
    <Abc/>
   
  <Contactus/>
 
  </React.StrictMode>
);

