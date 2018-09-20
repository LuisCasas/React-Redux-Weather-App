import Axios from 'axios';

// to be changed to appropriate react export import
const config = require('../../config/config');

const API_KEY = config.api.API_KEY;

const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}

/*
    adding API request and Ajax with Axios
*/