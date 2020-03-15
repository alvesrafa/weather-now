import React, { useEffect, useState } from 'react';
import api from '../../services/google_api';
import { GOOGLE_KEY } from '../../env.json';

export default function SearchInput({cityKey}){
  const [address, setAddress] = useState('');

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
        setTimeout(()=> cityKey(response.data.results[0].formatted_address), 2500) //verificar se não é possivel colocar 'address' aqui
      })
      .catch( e => {
        console.log(e)
      })
    }
    
  }, [])

  
  

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
      <button onClick={() => cityKey(address)}> Buscar</button>
    </form>
  )
}