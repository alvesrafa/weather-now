import React, {useState, useEffect} from 'react';
import './App.css';
import api from './services/api';
import { KEY } from './env.json';
import TempDay from './components/TempDay';
import TempToday from './components/TempToday';


function App() {
  const [address, setAddress] = useState('');
  const [forecasts, setForecasts] = useState('');
  const [headline, setHeadline] = useState('');
  const [city, setCity] = useState('');
  const [conditions, setConditions] = useState('');

  useEffect(async()=> {
    async function searchData(){
      if(!city.Key) return ;

      let config = {
        params: {
          apikey: KEY,
          language: 'pt-BR',
        } 
      };
      
      await api.get(`/forecasts/v1/daily/5day/${city.Key}`, config)
        .then( response => {
          setForecasts(response.data.DailyForecasts)
          setHeadline(response.data.Headline)
          console.log(response.data)
        })
        .catch( e => {
          console.log(e)
        })

      await api.get(`/currentconditions/v1/${city.Key}`, config).then( response => {
        console.log(response.data[0])
        setConditions(response.data[0])
      }).catch( err => {
        console.log(err)
      })

    }
    searchData()
  }, [city])

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
    await api.get('/locations/v1/cities/search', config )
      .then( response => {
        setCity(response.data[0])
      })
      .catch( e => {
        console.log(e)
      })



  }

  return (
    <div className="App">
      <form onSubmit={cityKey}>
        <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>

      <div className="forecasts">
        {
        (forecasts && conditions) ? forecasts.map((dia, id) => {
          if(id !== 0) return <TempDay key={id} dia={dia}/>
          else return <TempToday key={id} dia={dia} head={headline} city={city} condition={conditions}/>
        })
        :
        <div>Não tem</div>
        }
      </div>
    </div>
  );
}

export default App;
