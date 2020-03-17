import React, {useState} from 'react';
import './App.css';
import api from './services/api';
import { KEY } from './env.json';

import TempDay from './components/TempDay';
import TempToday from './components/TempToday';
import SearchInput from './components/searchInput';

import animationData from './assets/loading.json';
import Lottie from 'react-lottie';

function App() {
  const [loading, setLoading] = useState(false);

 
  const [city, setCity] = useState('');

  const [conditions, setConditions] = useState('');
  const [forecasts, setForecasts] = useState('');
  const [headline, setHeadline] = useState('');

  async function cityKey(address){
    setLoading(true)
    
    let config = {
      params: {
        apikey: KEY,
        q: address,
        language: 'pt-BR',
      } 
    };
    let newConfig = {
      params: {
        apikey: KEY,
        language: 'pt-BR',
      } 
    }
    console.log(address)
    await api.get('/locations/v1/cities/search', config).then( response => {
    
    // if(!city.Key) return console.log('cityvazio');
    // outras requisições aqui
    if(response.data.length === 0) return console.log('array vazio');

    setCity(response.data[0])
    api.get(`/forecasts/v1/daily/5day/${response.data[0].Key}`, newConfig).then( response => {
        setForecasts(response.data.DailyForecasts)
        setHeadline(response.data.Headline)
      })
      api.get(`/currentconditions/v1/${response.data[0].Key}`, newConfig).then( response => {
        setConditions(response.data[0])
      })

      setLoading(false);
    }).catch(e => {
      console.log(e)
    
    })
    
  }

  return (
    <div className="App">
      <SearchInput cityKey={cityKey}/>
      {
      loading ?
      <Lottie
        style={{flex:1}}
        options={{
          loop: true,
          autoplay: true, 
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={200}
        width={200}
      />
      :
      <div className="forecasts">
        {
        (forecasts && conditions) ? forecasts.map((dia, id) => {
          if(id !== 0) return <TempDay key={id} dia={dia} head={headline}/>
          else return <TempToday key={id} dia={dia} head={headline} city={city} condition={conditions}/>
        })
        : 'nada'
        }
      </div>
      }
    </div>
  );
}

export default App;
