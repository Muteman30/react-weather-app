import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Box } from '@mui/material';
import React from 'react';
import { openWeatherTimeToDateTime } from '../../util/time';
import HistoryRow from "./HistoryRow";

const styles = {
    marginTop: 3
}

const HistoryTable = ({history})=>{
    const table = {};
    history.forEach(item => {
        if (!table[item.label]){
            table[item.label] = []
        }
        table[item.label].push({
            temp: item.current.main.temp,
            min_temp: item.current.main.temp_min,
            max_temp: item.current.main.temp_max,
            time: openWeatherTimeToDateTime(item.current.dt).toLocaleString()
        })
    })

    return(<Box sx={styles}>
        <Typography variant="h4">History</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Location</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {Object.keys(table).sort().map(label =>(
                <HistoryRow label={label} data={table[label]}/>
            ))}
            </TableBody>
        </Table>
    </Box>)
}

export default HistoryTable;