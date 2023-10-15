import React from 'react';
import {CircularProgress, Paper} from '@mui/material';
import Details from './Details';
 
const styles = {
    card:{
        padding:2
    }
}

const Location = ({loading, location})=>{

    return(
        <Paper sx={styles.card} elevation={2}>
            { 
                loading || !location.current?
                <CircularProgress/> : 

                <Details location={location.label} current={location.current} forecast={location.forecast}/>
            }
        </Paper>
    )
}

export default Location;