import React from 'react';
import {List} from '@mui/material';

const SearchOptions = ({children})=>{
    return(
        <List>
            {children}
        </List>
    )
}

export default SearchOptions;