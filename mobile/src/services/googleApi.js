import axios from 'axios';

const google_api = axios.create ({
  baseURL: 'https://maps.googleapis.com/'
})

export default google_api;