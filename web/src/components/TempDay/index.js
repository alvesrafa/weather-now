import React, { useState } from 'react';
import './otherDay.css';
import { FtoC, dataPadrao } from '../../assets/functions';
import ToogleTime from '../../components/ToogleTime';
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
            <div className="noite">
              <div>Durante a noite: {dia.Day.IconPhrase}</div>
              <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
              
              <div>Chance de precipitação? {dia.Day.HasPrecipitation ? 'Sim' : 'Não'}</div>
              <div>Intensidade: 
                {
                  (dia.Day.PrecipitationIntensity === 'Light') ? ' Leve' : 
                  (dia.Day.PrecipitationIntensity ==='Moderate') ? ' Moderada' :
                  (dia.Day.PrecipitationIntensity ==='Heavy') ? ' Pesada' : ' --'
                }
              </div>
              <div>Tipo: 
                {
                  (dia.Day.PrecipitationType === 'Rain') ? ' Chuva' :
                  (dia.Day.PrecipitationType === 'Snow') ? ' Neve' :
                  (dia.Day.PrecipitationType === 'Ice') ? ' Granizo' :
                  (dia.Day.PrecipitationType === 'Mixed') ? ' Neve e Granizo' : ' --'
                }
              </div>
            </div>
            :
            
            <div className="dia">
              <div>Durante o dia: {dia.Day.IconPhrase}</div>
              <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
            

              <div>Chance de precipitação? {dia.Day.HasPrecipitation ? 'Sim' : 'Não'}</div>
              <div>Intensidade: 
                {
                  (dia.Day.PrecipitationIntensity === 'Light') ? ' Leve' : 
                  (dia.Day.PrecipitationIntensity ==='Moderate') ? ' Moderada' :
                  (dia.Day.PrecipitationIntensity ==='Heavy') ? ' Pesada' : ' --'
                }
              </div>
              <div>Tipo: 
                {
                  (dia.Day.PrecipitationType === 'Rain') ? ' Chuva' :
                  (dia.Day.PrecipitationType === 'Snow') ? ' Neve' :
                  (dia.Day.PrecipitationType === 'Ice') ? ' Granizo' :
                  (dia.Day.PrecipitationType === 'Mixed') ? ' Neve e Granizo' : ' --'
                }
              </div>

            </div>
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