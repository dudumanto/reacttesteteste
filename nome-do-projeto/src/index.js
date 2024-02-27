import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import resolva from './resolva';
import BgBg from './fundoimg';
import ContatoForm from './contatoform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Navbar />
    <BgBg />
   
  
  </div>
);

reportWebVitals();
