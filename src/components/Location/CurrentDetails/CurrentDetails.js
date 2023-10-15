import React from 'react';
import { Typography, Box, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { openWeatherTimeToDateTime } from "../../../util/time";
import { getWindDirection } from '../../../util/weather';


const CurrentDetails = ({current})=>{
    return(<Box>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Current Temp</TableCell>
                    <TableCell>{current.main.temp}&#8451;</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Temp High</TableCell>
                    <TableCell>{current.main.temp_max}&#8451;</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Temp Low</TableCell>
                    <TableCell>{current.main.temp_min}&#8451;</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Current Humidity</TableCell>
                    <TableCell>{current.main.humidity}%</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Wind Speed</TableCell>
                    <TableCell>{current.wind.speed} m/s {getWindDirection(current.wind.deg)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Sunrise / Sunset</TableCell>
                    <TableCell>{openWeatherTimeToDateTime(current.sys.sunrise).toLocaleTimeString()} / {openWeatherTimeToDateTime(current.sys.sunset).toLocaleTimeString()}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Typography variant="caption">Information Issued: {openWeatherTimeToDateTime(current.dt).toLocaleString()}</Typography>
    </Box>)
}

export default CurrentDetails;