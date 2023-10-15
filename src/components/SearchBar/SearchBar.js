import React from 'react';
import {TextField} from "@mui/material";

const style={
    width: "100%"
}

const SearchBar = ({handleChange, value})=>{
    return(<>
        <TextField id="locationSearch"
            variant="standard" 
            label="Search location" 
            value={value}
            onChange={(evt)=>handleChange(evt.target.value)}
            sx={style}
        />
    </>)
}

export default SearchBar;