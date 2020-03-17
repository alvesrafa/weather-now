import React, { useEffect ,createRef } from 'react';
import './toogle.css'
export default function ToogleTime({toogleState, setToogleState}){
  
  const toggle = createRef()
  useEffect(()=> {
    setToogleState(toggle.current.value)
  },[])
  function toogleChange() {
    toogleState ? setToogleState(false) : setToogleState(true)
  }

  return (
    <>
    
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