import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resolva from './resolva'; // Importe o componente Resolva
import ContatoForm from './contatoform';
import Porc30 from './porc30';


const BgBg = () => {
  const bgStyle = {
    backgroundImage: 'url("/bgbg.png")',
    backgroundSize: 'cover',
    height: '130vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  };

  return (
    <div style={bgStyle}>
      <Resolva />
      <ContatoForm/>
      

    </div>
  );
};

export default BgBg;
