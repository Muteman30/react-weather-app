import React from 'react';
import {ListItem} from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const styles = {
    listItem: {
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "background.main"
        }
    }
    
}

const SearchOption = ({location, handleSelect})=>{
    return(
        <ListItem sx={styles.listItem} onClick={()=>handleSelect(location)}>
            <LocationCityIcon/>
            {location.label}
        </ListItem>
    )
}

export default SearchOption;