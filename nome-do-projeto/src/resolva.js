import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resolva.css';
import { Container } from 'react-bootstrap';

const Resolva = () => {
  return (
    
    <Container fluid>
    <div className="twotwo container">
      <div className="oi">
        <h2 className="h2h2">Resolva conflitos</h2>
        <h1 className="h1h1">empresariais <br/> ou trabalhistas</h1>
        <h2 className="h3h3">de forma rápida <br/> e acessível.</h2>
      </div>
      <div className="especialista-container mt-4">
        <h2 className="especialista">Fale com um especialista <br/> agora mesmo.</h2>
      </div>
      <div className="campos-container mt-4">
        <h2 className="marcados">Os campos marcados com * são obrigatórios.</h2>
      </div>
      <div className="imgimgimg-container mt-4">
        <img className="imagem22" src="\porc30.png"></img>
      </div>
    </div>

    </Container>
  
   
  );
};

export default Resolva;
