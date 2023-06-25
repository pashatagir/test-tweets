import axios from 'axios';

axios.defaults.baseURL = 'https://6491febd2f2c7ee6c2c9450f.mockapi.io/api/v1';
export const getAllUsers = async () => {
  const { data } = await axios.get('/users', {
    params: { page: 1, limit: 3 },
  });
  return data;
};
