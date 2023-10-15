import React from 'react';
import {CircularProgress, Paper, Typography} from '@mui/material';
import CurrentDetails from './CurrentDetails';
 
const styles = {
    card:{
        padding:2
    }
}

const Location = ({loading, location})=>{

    return(
        <Paper sx={styles.card} elevation={2}>
            <Typography variant="h4">Current:</Typography>
            { 
                loading || !location.current?
                <CircularProgress/> : 

                <CurrentDetails location={location.label} weather={location.current}/>
            }
        </Paper>
    )
}

export default Location;