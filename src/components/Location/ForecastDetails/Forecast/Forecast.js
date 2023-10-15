import React from 'react';
import {Box, Typography} from "@mui/material"
import { getWindDirection } from '../../../../util/weather';
import {openWeatherTimeToDateTime} from '../../../../util/time';


const styles = {
    marginRight: 1,
    textAlign: 'center'
}

const Forecast = ({time, weather, wind, temp})=>{
    return(
        <Box sx={styles}>
            <Typography variant="body1">{openWeatherTimeToDateTime(time).toLocaleTimeString()}</Typography>
            <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt={`${weather.description} icon`}/>
            <Typography variant="body1">{temp}</Typography>
            <Typography variant="body1">{wind.speed} {getWindDirection(wind.deg)}</Typography>
        </Box>
    )
}

export default Forecast;