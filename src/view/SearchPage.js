import React, {useState, useEffect} from 'react';
import {useDebounce} from 'use-debounce';
import { Container, Typography , Box} from '@mui/material';
import {getLocations} from '../util/requests';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchOptions from '../components/SearchOptions/SearchOptions';
import SearchOption from '../components/SearchOptions/SearchOption/SearchOption';

const SearchPage = (props)=>{
    const [searchValue, setSearchValue] = useState('');
    const [possibleLocations, setPossibleLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [debouncedSearch] = useDebounce(searchValue,1000);

    useEffect(()=>{
        if(debouncedSearch){
            getLocations(debouncedSearch).then(results=>{
                setPossibleLocations(results.data.map(location=>({
                    ...location,
                    label: `${location.name}, ${location.state}, ${location.country}`
                })));
            })
        }
        return ()=>{}
    }, [debouncedSearch])

    const handleChange = (text)=>{
        setSearchValue(text)
    }

    const handleSelect = (value) => {
        setSelectedLocation(value);
        setPossibleLocations([]);
    }

    return(
        <Container>
            <Typography variant="subtitle">Search:</Typography>
            <Box>
                <SearchBar 
                    options={possibleLocations}
                    handleChange={handleChange}
                    value={searchValue}
                />
                <SearchOptions >
                    {possibleLocations.map(location => <SearchOption handleSelect={handleSelect} location={location}/>)}
                </SearchOptions>
            </Box>
            {selectedLocation?.name}
        </Container>
    )
}

export default SearchPage;