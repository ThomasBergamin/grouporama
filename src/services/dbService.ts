import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:3001/api/';

class dbService {
  getGifs(signal: AbortSignal) {
    const token = authHeader();
    return axios.get(API_URL + 'gifs', { headers: token, signal });
  }

  getGif(id: string, signal: AbortSignal) {
    const token = authHeader();
    return axios.get(API_URL + `gifs/${id}`, { headers: token, signal });
  }

  getGifComments(id: string, signal: AbortSignal) {
    const token = authHeader();
    return axios.get(API_URL + `gifs/${id}/comments`, {
      headers: token,
      signal,
    });
  }

  postGif(userId: string, title: string, url: string) {
    const token = authHeader();
    console.log(token);
    return axios.post(
      API_URL + `gifs/`,
      {
        userId,
        title,
        url,
      },
      { headers: token },
    );
  }

  /* getComments() {
    return axios.get(API_URL + 'comments', { headers: authHeader() });
  } */
}

export default new dbService();
