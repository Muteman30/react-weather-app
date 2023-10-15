import React, {useState} from 'react';
import { Typography, Box, Tabs, Tab } from "@mui/material";
import CurrentDetails from './CurrentDetails/CurrentDetails';
import ForecastDetails from './ForecastDetails/ForecastDetails'
import { timeSecsToHours, dateTimeAtTimezone} from "../../util/time";

const styles={
    currentContainer: {
        display:"flex",
        flexWrap: "nowrap",
        justifyContent:"space-between",
        padding:1,
        borderRadius:1,
        backgroundColor: "background.main"
    }
}

const Details = ({location, current, forecast})=>{

    const [tabValue, setTabValue] = useState('Current');

    const handleChange = (event, newValue)=> setTabValue(newValue);

    return(<>
        <Box sx={styles.currentContainer}>
            <Box>
                <Typography variant="h5">
                    {location}
                </Typography>
                <Typography variant="caption">Local Time: {dateTimeAtTimezone(current.timezone)} (UTC +{timeSecsToHours(current.timezone)})</Typography>
            </Box>
            <Box>
                <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt={`${current.weather[0].description} icon`}/>
                <Box>{current.main.temp}&#8451;</Box>
                <Box></Box>
            </Box>
        </Box>
        <Box>
            <Tabs onChange={handleChange} value={tabValue} indicatorColor='primary'>
                <Tab label="Current" value="Current"/>
                <Tab label="Forecast" value="Forecast"/>
            </Tabs>
            {tabValue==='Current' &&
                <CurrentDetails current={current}/>
            }
            {tabValue === "Forecast" && 
                <ForecastDetails forecast={forecast}/>
            }
            
        </Box>
        
    </>)
}

export default Details;