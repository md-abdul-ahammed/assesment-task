import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const CreateProfile = () => {
    const { register, handleSubmit } = useForm();
    const [countries, setCountries] = useState({});
    const [cities, setCities] = useState({});
    const [selectedCities, setSelectedCities] = useState([]);
    const [country, setCountry] = useState('')

    useEffect(() => {
        fetch('../country-states.json')
            .then(res => res.json())
            .then(data => {
                setCountries(data.country)
                setCities(data.states)
            })

    }, [])
    const getCities = (country) => {
        setCountry(country)
        let allCities = [];
        const dataArray = Object.entries(countries);
        const countryInfo = dataArray.find(arr => arr[1] === country);
        const countryCode = countryInfo[0];
        const citiesInfo = Object.entries(cities)
        const cityArray = citiesInfo.find(cityArr => cityArr[0] === countryCode);
        const allCitiesArray = cityArray[1];
        allCitiesArray.forEach(Obj => allCities.push(Obj.name))
        setSelectedCities(allCities)
    }
    console.log(cities);
    const onSubmit = data => {
        console.log(country);
        data.country = country;
        console.log(data);
        // const formData = new FormData();
        // formData.append(data.companyName)
        // formData.append(data.address)
    }
    return (
        <Box>
            <Typography variant="h2" gutterBottom component="div">
                Please Create Your Profile
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <TextField {...register("companyName")} id="standard-basic" label="Company Name" variant="standard" />
                </Box>
                <Box>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Upload your company logo
                    </InputLabel>
                    <Input {...register("img")} type={"file"} inputProps={{ accept: "image/png, image/jpeg" }} />
                </Box>
                <Box>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Minimum 3 rows"
                        style={{ width: "100%" }}
                    />
                </Box>

                <select onChange={(e) => e.target.value !== '' && getCities(e.target.value)}>
                    <option value="">Select</option>

                    {
                        Object.values(countries).map(country => <option value={country}>{country}</option>)
                    }
                </select>

                <select {...register("cities")}>
                    <option value="">Select</option>
                    {selectedCities?.map(city => <option value={city}>{city}</option>)}
                </select>

                <Button sx={{ width: 1 }} type="submit" variant="contained">
                    Register
                </Button>
            </form>
        </Box >
    );
};

export default CreateProfile;



























