import React, {useState, useEffect} from 'react';
import './App.css';
import api from './services/api';
import { KEY } from './env.json';
import Local from './components/Local';
function App() {
  const [address, setAddress] = useState('');
  const [key, setKey] = useState('');
  const [city, setCity] = useState('');
  const [forecasts, setForecasts] = useState('');

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
      console.log(response.data)
    }
    searchData()
  }, [key])

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
      
      {forecasts ? forecasts.map((dia, id) => (
        <div key={id} className="card">
          <div className="data">{dia.Date}</div>
          <div className="temperatura">
            <div className="max">
               maxima de {dia.Temperature.Maximum.Value}
                <span className="celsius">º{dia.Temperature.Maximum.Unit}</span>
            </div>
            <div className="min">
                minima de {dia.Temperature.Minimum.Value}
                <span className="celsius">º{dia.Temperature.Minimum.Unit}</span>
            </div>
          </div>
          <div className="Dia">
            <div>chove?{dia.Day.HasPrecipitation}</div>
            <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
            <div>Frase: {dia.Day.IconPhrase}</div>
            <div>itensidade: {dia.Day.PrecipitationIntensity}</div>
            <div>tipo: {dia.Day.PrecipitationType}</div>
          </div>
          <div className="Noite">
            <div>{dia.Day.HasPrecipitation}</div>
            <img src={`https://developer.accuweather.com/sites/default/files/${("0"+dia.Day.Icon).slice(-2)}-s.png`} alt=""/>
            <div>{dia.Day.IconPhrase}</div>
            <div>{dia.Day.PrecipitationIntensity}</div>
            <div>{dia.Day.PrecipitationType}</div>
          </div>
        </div>
      ))
    :
     <div>Não tem</div>
     }
      

    </div>
  );
}

export default App;
