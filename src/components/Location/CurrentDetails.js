import React from 'react';
import {Typography, Box, Table, TableBody, TableRow, TableCell} from "@mui/material";
import {openWeatherTimeToDateTime, timeSecsToHours, dateTimeAtTimezone} from "../../util/time";
import { getWindDirection } from '../../util/weather';
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

const CurrentDetails = ({location, weather})=>{

    return(<>
        <Box sx={styles.currentContainer}>
            <Box>
                <Typography variant="h5">
                    {location}
                </Typography>
                <Typography variant="caption">Local Time: {dateTimeAtTimezone(weather.timezone)} (UTC +{timeSecsToHours(weather.timezone)})</Typography>
            </Box>
            <Box>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={`${weather.weather[0].description} icon`}/>
                <Box>{weather.main.temp}&#8451;</Box>
                <Box></Box>
            </Box>
        </Box>
        <Box>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Temp High</TableCell>
                        <TableCell>{weather.main.temp_max}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Temp Low</TableCell>
                        <TableCell>{weather.main.temp_min}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Current Humidity</TableCell>
                        <TableCell>{weather.main.humidity}%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wind Speed</TableCell>
                        <TableCell>{weather.wind.speed} m/s {getWindDirection(weather.wind.deg)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sunrise / Sunset</TableCell>
                        <TableCell>{openWeatherTimeToDateTime(weather.sys.sunrise).toLocaleTimeString()} / {openWeatherTimeToDateTime(weather.sys.sunset).toLocaleTimeString()}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
            <Typography variant="caption">Information Issued: {openWeatherTimeToDateTime(weather.dt).toLocaleString()}</Typography>
        </Box>
    </>)
}

export default CurrentDetails;