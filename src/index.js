import React from 'react';
import ReactDOM from 'react-dom/client';
import Aboutpage,{Abc} from './About';
import Contactus from './Contactus';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aboutpage/>
    <Abc/>
  <Contactus/>
 
  </React.StrictMode>
);

