import React from 'react';
import {Box} from "@mui/material"
import Forecast from './Forecast/Forecast';

const style = {
    display:"flex",
    overflowX: "scroll"
}

const ForecastDetails = ({forecast})=>{
    return(<>
        <Box sx={style}>
            {forecast.map(item => <Forecast time={item.dt} temp={item.main.temp} weather={item.weather[0]} wind={item.wind}/>)}
        </Box>
    </>)
}

export default ForecastDetails;