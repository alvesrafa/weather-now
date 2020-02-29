import React, {useState, useEffect} from 'react';
import './App.css';
import api from './services/api';
import { KEY } from './env.json';
import TempDay from './components/TempDay';
import TempToday from './components/TempToday';


function App() {
  const [address, setAddress] = useState('');
  const [key, setKey] = useState('');
  const [forecasts, setForecasts] = useState('');
  const [headline, setHeadline] = useState('');

  useEffect(()=> {
    async function searchData(){
      if(!key) return ;

      let config = {
        params: {
          apikey: KEY,
          language: 'pt-BR',
        } 
      };
      
      const response = await api.get(`/forecasts/v1/daily/5day/${key}`, config)
      setForecasts(response.data.DailyForecasts)
      setHeadline(response.data.headline)
    }
    searchData()
  }, [key])

  async function cityKey(e){
    e.preventDefault();
    if(address === '') return ;

    let config = {
      params: {
        apikey: KEY,
        q: address,
        language: 'pt-BR',
      } 
    };
    const response = await api.get('/locations/v1/cities/search', config )

    if(response.data[0])
      setKey(response.data[0].Key)
    else
      console.log('error')

  }

  return (
    <div className="App">
      <form onSubmit={cityKey}>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>

      <div className="forecasts">
        {forecasts ? forecasts.map((dia, id) => {
          if(id !== 0) return <TempDay key={id} dia={dia}/>
          else return <TempToday key={id} dia={dia} head={headline}/>
        })
        :
        <div>Não tem</div>
        }
      </div>
    </div>
  );
}

export default App;
