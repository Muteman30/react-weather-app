import axios from 'axios';

export const getLocations = (value)=>{
    return axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=10&appid=38869eef0353be16d54a2e193d80c08f`)
}