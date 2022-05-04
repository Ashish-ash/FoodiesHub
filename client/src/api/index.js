import axios from 'axios';

const url = 'https://foodieshubb.herokuapp.com/getFood';
export const fetchFoods = async () =>  {
    const data = await axios.get(url);
    return data;
};