import React, { useEffect, createRef } from 'react';
import api from '../../services/google_api';
import { GOOGLE_KEY } from '../../env.json';

export default function SearchInput({cityKey, address, setAddress}){
  let button = createRef()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationByCord(latitude, longitude)

      },
      (err) => {
          console.log(err)
      },
        {
          timeout:30000
        }
      
    );
    
  }, [])

  async function locationByCord(lat, long){
    let config = {
        params: {
          key: GOOGLE_KEY,
          latlng: lat+','+long,
        } 
    }

    await api.get('maps/api/geocode/json', config)
    .then( response => {
      setAddress(response.data.results[0].formatted_address)
      //locationByAddress(response.data.results[0].formatted_address)
    })
    .catch( e => {
      console.log(e)
    })
    setTimeout(() => {console.log('teste'); cityKey() }, 3000);
  }
  async function locationByAddress(q) {
    let config = {
        params: {
          key: GOOGLE_KEY,
          address: q,
        } 
    }
    await api.get('maps/api/geocode/json', config)
    .then( response => {
      console.log("aqui",response.data)
    }).catch(e => console.log(e))
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
      <button onClick={cityKey}> Buscasr</button>
    </form>
  )
}