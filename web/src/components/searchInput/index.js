import React, { useState, useEffect } from 'react';
import api from '../../services/google_api';
import { GOOGLE_KEY } from '../../env.json';

export default function SearchInput({cityKey, address, setAddress}){

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(GOOGLE_KEY,latitude+','+longitude)
        locationByCord(latitude, longitude)

        if(address) cityKey()
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
      
    })
    .catch( e => {
      console.log(e)
    })
  }
  async function locationByAddress() {
    let config = {
        params: {
          key: GOOGLE_KEY,
          address: '',
        } 
      
    }
    const response = await api.get('https://maps.googleapis.com/maps/api/geocode/json', config);

    console.log(response.data)
    
  }

  return (
      <form onSubmit={cityKey}>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>
  )
}