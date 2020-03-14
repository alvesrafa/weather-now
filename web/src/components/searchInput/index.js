import React, { useEffect } from 'react';
import api from '../../services/google_api';
import { GOOGLE_KEY } from '../../env.json';

export default function SearchInput({cityKey, address, setAddress}){
  useEffect(() => {
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
      })
      .catch( e => {
        console.log(e)
      })
    }
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
    setTimeout(()=> console.log('arrumarqui'), 3000)
  }, [setAddress])

  
  

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
      <button onClick={cityKey}> Buscar</button>
    </form>
  )
}