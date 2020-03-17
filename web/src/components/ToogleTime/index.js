import React, { useState, useRef, createRef } from 'react';
import './toogle.css'
export default function ToogleTime(){
  const [toogleState, setToogleState] = useState(false)
  const toggle = createRef()
  function toogleChange() {
    toogleState ? setToogleState(false) : setToogleState(true)
  }


  return (
    <>
    {toogleState ? 'true' : 'false'}
  <div className="wrapper">

    <div className="toggle">

      <input ref={toggle} onChange={toogleChange} className="toggle-input" value={toogleState} type="checkbox" />
      <div className="toggle-bg"></div>

      <div className="toggle-switch">
        <div className="toggle-switch-figure"></div>
        <div className="toggle-switch-figureAlt"></div>
      </div>  

    </div>
  </div>
  </>
  )
}