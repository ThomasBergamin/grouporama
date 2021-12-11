import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';
class dbService {
  getGifs(
    signal: AbortSignal,
    token: {
      Authorization: string;
    },
  ) {
    return axios.get(API_URL + 'gifs', { headers: token, signal });
  }

  getGif(
    id: string,
    signal: AbortSignal,
    token: {
      Authorization: string;
    },
  ) {
    return axios.get(API_URL + `gifs/${id}`, { headers: token, signal });
  }

  getGifComments(
    id: string,
    signal: AbortSignal,
    token: {
      Authorization: string;
    },
  ) {
    return axios.get(API_URL + `gifs/${id}/comments`, {
      headers: token,
      signal,
    });
  }

  postGif(
    userId: string,
    title: string,
    token: {
      Authorization: string;
    },
    url?: string,
    file?: File,
  ) {
    const formData = new FormData();
    if (file) {
      formData.append('image', file);
    } else if (url) {
      formData.append('url', url);
    }
    formData.append('userId', userId);
    formData.append('title', title);

    return axios.post(API_URL + `gifs/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', ...token },
    });
  }

  getUser(
    userId: string,
    signal: AbortSignal,
    token: {
      Authorization: string;
    },
  ) {
    return axios.get(API_URL + `users/${userId}`, { headers: token, signal });
  }
}

export default new dbService();
