import React, {useState} from 'react';
import {TableRow, TableBody, Table, TableHead, TableCell, IconButton, Collapse} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';

const styles={
    collapseCell: {
        padding:0
    },
    dataTable:{
        backgroundColor: 'background.main',
        "& td, th": {
            borderBottom: `1px solid black`
        }
    }
}

const HistoryRow = ({label, data})=>{
    const [dataOpen, setDataOpen] = useState(false);

    const handleButton = (evt)=> {
        setDataOpen(!dataOpen)
    }

    return(<>
        <TableRow>
            <TableCell sx={{ '& > *': { borderBottom: 'unset' } }}>
                <IconButton onClick={handleButton} size="small">{dataOpen ? <KeyboardArrowUp/> : <KeyboardArrowDown/> }</IconButton>
            </TableCell>
            <TableCell>{label}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell colspan={2} sx={styles.collapseCell}>
            <Collapse in={dataOpen} >
                <Table sx={styles.dataTable}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Temperature</TableCell>
                            <TableCell>Min Temp</TableCell>
                            <TableCell>Max Temp</TableCell>
                            <TableCell>Issued</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item=><TableRow>
                            <TableCell>{item.temp}</TableCell>
                            <TableCell>{item.min_temp}</TableCell>
                            <TableCell>{item.max_temp}</TableCell>
                            <TableCell>{item.time}</TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </Collapse>
            </TableCell>
        </TableRow>
    </>)
}

export default HistoryRow;