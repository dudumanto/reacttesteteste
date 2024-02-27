import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="#" className="oioi">
          <img className="imagemimagem" src="\logocemaac.png"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              Mediação e Arbitragem
            </li>
            <li className="nav-item">
              Quando usar
            </li>
            <li className="nav-item">
              Estrutura
            </li>
            <li className="nav-item">
              10 Motivos
            </li>
            <li className="nav-item">
              Mediação on-line
            </li>
            <li className="nav-item">
              A ACSP
            </li>
            <li className="nav-item">
              Unidades
            </li>
            <li className="nav-item">
              Depoimentos
            </li>
            <li className="nav-item">
              Fale com a gente
            </li>
          </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
