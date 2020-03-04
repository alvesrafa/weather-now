import React, { useState } from 'react';
import './otherDay.css';
import { FtoC, dataPadrao } from '../../assets/functions';
import { Modal } from 'react-bootstrap';

export default function TempDay({dia}) {;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={handleClose}>
          Close
        </button>
        <button variant="primary" onClick={handleClose}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>

    <div className="box" onClick={handleShow} >

      <div className="data">{dataPadrao(dia.Date)}</div>

      <div className="temperatura">
        <div className="max">
            Máxima de {FtoC(dia.Temperature.Maximum.Value)}
            <span className="celsius">ºC</span>

        </div>
        <div className="min">
            Mínima de {FtoC(dia.Temperature.Minimum.Value)}
            <span className="celsius">ºC</span>
        </div>
      </div>

      
    </div>
    </>
  )
  
}