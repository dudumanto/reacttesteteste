import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import './drop.css';
import './dropmove.css'
function Drop() {
  return (
    <Dropdown>
      <Dropdown.Toggle className='oioioioi'  id="oiooi dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Esportes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Gameplay</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Vamos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Drop;