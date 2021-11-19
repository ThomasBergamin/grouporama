import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:3001/api/';

class dbService {
  getGifs() {
    const token = authHeader();
    return axios.get(API_URL + 'gifs', { headers: token });
  }

  /* getComments() {
    return axios.get(API_URL + 'comments', { headers: authHeader() });
  } */
}

export default new dbService();
