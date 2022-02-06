import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});

export const registerUserAPI = async (name, email, password) => {
  try {
    const result = await API.post(
      '/user',
      { name, email, password }
    );
    return result;
  } catch (err) {
    return err.response;
  }
};

export const loginUserAPI = async (email, password) => {
  try {
    const result = await API.post('/login', { email, password });
    console.log(result)
    return result;
  } catch (err) {
    return err.response;
  }
}
