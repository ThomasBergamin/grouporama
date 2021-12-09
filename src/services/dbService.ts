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

  postGif(userId: string, title: string, url?: string, file?: File) {
    const token = authHeader();
    const formData = new FormData();
    if (file) {
      formData.append('selectedFile', file);
    } else if (url) {
      formData.append('url', url);
    }
    formData.append('userId', userId);
    formData.append('title', title);

    return axios.post(API_URL + `gifs/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', ...token },
    });
  }

  getUser(userId: string, signal: AbortSignal) {
    const token = authHeader();
    return axios.get(API_URL + `users/${userId}`, { headers: token, signal });
  }

  /* getComments() {
    return axios.get(API_URL + 'comments', { headers: authHeader() });
  } */
}

export default new dbService();
