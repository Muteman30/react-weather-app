import React from 'react';
import {TextField} from "@mui/material";

const SearchBar = ({handleChange, value})=>{


    return(<>
        <TextField id="locationSearch"
            variant="standard" 
            label="Search location" 
            value={value}
            onChange={(evt)=>handleChange(evt.target.value)}
        />
    </>)
}

export default SearchBar;