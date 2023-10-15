import axios from 'axios';

const baseUrl = "https://api.openweathermap.org";
const appKey = "38869eef0353be16d54a2e193d80c08f";
const units = "metric";

export const getLocations = (value)=>{
    return axios.get(`${baseUrl}/geo/1.0/direct?q=${value}&limit=10&appid=${appKey}`).then(result =>result.data);
}

export const getLocationWeather = (selectedLocation)=>{
    const {lon, lat} = selectedLocation;
    return Promise.all([
        getLocationCurrent(lon, lat),
        getForecast(lon, lat),
        //getLocationDaily(lon, lat)
    ]).then(results => ({
        ...selectedLocation,
        current: results[0].data,
        forecast: results[1].data.list
    }))
}

export const getLocationCurrent = (lon, lat) =>{
    return axios.get(`${baseUrl}/data/2.5/weather?appid=${appKey}&lon=${lon}&lat=${lat}&units=${units}`);
}

export const getForecast = (lon, lat) =>{
    return axios.get(`${baseUrl}/data/2.5/forecast?appid=${appKey}&lon=${lon}&lat=${lat}&units=${units}`);
}

export const getLocationDaily = (lon, lat) =>{
    return axios.get(`${baseUrl}/data/2.5/forecast/daily?appid=${appKey}&lon=${lon}&lat=${lat}&units=${units}`);
}