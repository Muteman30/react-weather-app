import React, {useState, useEffect} from 'react';
import {useDebounce} from 'use-debounce';
import { Container, Typography , Box} from '@mui/material';
import {getLocationWeather, getLocations} from '../util/requests';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchOptions from '../components/SearchOptions/SearchOptions';
import SearchOption from '../components/SearchOptions/SearchOption/SearchOption';
import Location from "../components/Location/Location";
import HistoryTable from "../components/HistoryTable/HistoryTable";

const SearchPage = (props)=>{
    const [loadingLocation, setLoadingLocation] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [possibleLocations, setPossibleLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [debouncedSearch] = useDebounce(searchValue,1000);
    const [locationHistory, setLocationHistory] = useState([]);

    useEffect(()=>{
        if(debouncedSearch){
            getLocations(debouncedSearch).then(results=>{
                setPossibleLocations(results.map(location=>({
                    ...location,
                    label: `${location.name}, ${location.state}, ${location.country}`
                })));
            })
        }
        return ()=>{}
    }, [debouncedSearch])

    useEffect(()=>{
        if(selectedLocation){
            setLoadingLocation(true)
            getLocationWeather(selectedLocation).then(result=>{
                setLoadingLocation(false);
                setLocationHistory([result, ...locationHistory]);
            })
        }
    }, [selectedLocation])

    const handleChange = (text)=>{
        setSearchValue(text)
    }

    const handleSelect = (value) => {
        setSelectedLocation(value);
        setPossibleLocations([]);
        setSearchValue("");
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
            <Box>
                {
                    locationHistory.length>0 && 
                    <>
                        <Location location={locationHistory[0]} loading={loadingLocation}/>
                        <HistoryTable history={locationHistory}/>
                    </>
                    
                }
            </Box>
        </Container>
    )
}

export default SearchPage;