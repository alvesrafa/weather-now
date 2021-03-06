import React, { useEffect, useState } from 'react';
import api from '../../services/google_api';
import { GOOGLE_KEY } from '../../env.json';

export default function SearchInput({cityKey}){
  const [address, setAddress] = useState('');

  async function locationByAddress(address) { //Metodo que busca a cidade mesmo que o nome seja digitado incorretamente
    let config = {
        params: {
          key: GOOGLE_KEY,
          address,
        } 
    }
    await api.get('maps/api/geocode/json', config)
    .then( response => {

      let array = [];
      response.data.results[0].address_components.map((component, i) => {
        if(i <= 3)
          array.push(i === 0 ? component.long_name : component.short_name)
      })
      let novoArr = array.filter((este, i) =>{ //retirar valores duplicados
        return array.indexOf(este) === i;
      });
      let string = novoArr.toString()
      cityKey(string)



      // response.data.results[0].formatted_address;
      // console.log(response.data)
      // let address1 = response.data.results[0].address_components[0].long_name.replace(/[.]/g,'')
      // let address2 = response.data.results[0].address_components.pop().long_name.replace(/[.]/g,'')
      // let address_google = address1 + ', ' + address2
      // cityKey(address_google)
    }).catch(e => console.log(e))
  }

  // useEffect(() => {
  //   if(address) return ;
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       locationByCord(latitude, longitude)

  //     },
  //     (err) => {
  //         console.log(err)
  //     },
  //       {
  //         timeout:30000
  //       }
  //   );

  //   async function locationByCord(lat, long){
  //     let config = {
  //         params: {
  //           key: GOOGLE_KEY,
  //           latlng: lat+','+long,
  //         } 
  //     }
  
  //     await api.get('maps/api/geocode/json', config)
  //     .then( response => {
  //       setAddress(response.data.results[0].formatted_address)
  //       setTimeout(()=> cityKey(response.data.results[0].formatted_address), 1750) //verificar se não é possivel colocar 'address' aqui
  //     })
  //     .catch( e => console.log(e))
  //   }
    
  // }, [cityKey, address])

  
  

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
      <button onClick={() => locationByAddress(address)}> Buscar</button>
    </form>
  )
}