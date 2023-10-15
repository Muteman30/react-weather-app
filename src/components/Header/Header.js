import React from 'react';
import {AppBar, Typography} from "@mui/material";

const styles = {
    appBar: {
        padding: 3
    }
}

const Header = (props)=>{
    return(
        <AppBar position="fixed" sx={styles.appBar}>
            <Typography variant="appTitle">
                Weather App
            </Typography>
        </AppBar>
    )
}

export default Header;