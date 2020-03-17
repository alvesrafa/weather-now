import React, { useState } from 'react';
import './otherDay.css';
import { FtoC, dataPadrao } from '../../assets/functions';
import ToogleTime from '../../components/ToogleTime';
import Dia from '../../components/Dia';
import Noite from '../../components/Noite';

import { Modal } from 'react-bootstrap';

export default function TempDay({dia, head}) {;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toogleState, setToogleState] = useState(false)
  return (
    <>
    <Modal className="modal" show={show} onHide={handleClose}>
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title className="data">{dataPadrao(dia.Date)}</Modal.Title>
        <div className="modal-temperatura">
            <div className="max">
                ↑{FtoC(dia.Temperature.Maximum.Value)}
                <span className="celsius">ºC</span>
            </div>
            <div className="min">
                ↓{FtoC(dia.Temperature.Minimum.Value)}
                <span className="celsius">ºC</span>
            </div>
          </div>
      </Modal.Header>
      <Modal.Body 
        className="modal-body"

      >
     
          
          <div className="detalhes">
          <ToogleTime  toogleState={toogleState} setToogleState={setToogleState} />
          {
          toogleState ? 
          <Dia dia={dia.Day}/>
          : 
          <Noite noite={dia.Night}/>
          }

          </div>
        
      </Modal.Body>
    </Modal>

    <div className="box" onClick={handleShow} >

      <div className="data">{dataPadrao(dia.Date)}</div>

      <div className="temperatura">
        <div className="max">
            ↑{FtoC(dia.Temperature.Maximum.Value)}
            <span className="celsius">ºC</span>

        </div>
        <div className="min">
            ↓{FtoC(dia.Temperature.Minimum.Value)}
            <span className="celsius">ºC</span>
        </div>
      </div>

      
    </div>
    </>
  )
  
}