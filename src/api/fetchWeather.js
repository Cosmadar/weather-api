import axios from "axios";
 
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '365970fea6a70ad5e413147e1a872f3c';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}