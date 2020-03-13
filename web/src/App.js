import React, {useState, useEffect} from 'react';
import './App.css';
import api from './services/api';
import { KEY } from './env.json';

import TempDay from './components/TempDay';
import TempToday from './components/TempToday';
import SearchInput from './components/searchInput'

import animationData from './assets/loading.json';
import Lottie from 'react-lottie';

function App() {
  const [address, setAddress] = useState('');
  const [forecasts, setForecasts] = useState('');
  const [headline, setHeadline] = useState('');
  const [city, setCity] = useState('');
  const [conditions, setConditions] = useState('');
  const [loading, setLoading] = useState(true);

  
    async function searchData(){
      console.log('data')
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
      
      setLoading(false);
    }
    
  

  async function cityKey(){
    console.log('cityKey')
    setLoading(true)
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

      searchData();
  }

  return (
    <div className="App">
      <SearchInput cityKey={cityKey} address={address} setAddress={setAddress} />

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
        (forecasts && conditions) && forecasts.map((dia, id) => {
          if(id !== 0) return <TempDay key={id} dia={dia} head={headline}/>
          else return <TempToday key={id} dia={dia} head={headline} city={city} condition={conditions}/>
        })
        
        }
      </div>
      }
    </div>
  );
}

export default App;
