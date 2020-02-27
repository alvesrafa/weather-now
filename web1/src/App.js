import React, {useState, useEffect} from 'react';
import './App.css';
import api from './services/api';
import { KEY } from './env.json';

function App() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('')

 

  async function cityKey(e){
    e.preventDefault();
    if(address == '') return ;

    let config = {
      params: {
        apikey: KEY,
        q: address,
        language: 'pt-BR',
      } 
    };
    const response = await api.get('/locations/v1/cities/search', config )

    if(response.data[0])
      setCity(response.data[0].Key)
    else
      console.log('error')

  }
  


  return (
    <div className="App">
      
      <form onSubmit={cityKey}>

        <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
        
        <button>Buscar</button>

      </form>
    </div>
  );
}

export default App;
