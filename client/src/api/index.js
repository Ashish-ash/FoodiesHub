import axios from 'axios';

const url = 'http://localhost:5000/getFood';
export const fetchFoods = async () =>  {
    const data = await axios.get(url);
    return data;
};