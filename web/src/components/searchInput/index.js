import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { GOOGLE_KEY } from '../../env.json';

export default function SearchInput({cityKey, address, setAddress}){
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        console.log(latitude, longitude)
        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
          console.log(err)
      },
        {
          timeout:30000
        }
      
    );
  }, [])
  
  function getGeoLocation() {
    let config = {
      params: {
        params: {
          key: GOOGLE_KEY,
          address: '',
        } 
      }
    }
    const response = api.get('https://maps.googleapis.com/maps/api/geocode/json', config);
    
    console.log(response.data)
    
  }

  return (
      <form onSubmit={cityKey}>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>
  )
}