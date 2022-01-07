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

  deleteGif(
    id: string,
    token: {
      Authorization: string;
    },
  ) {
    return axios.delete(API_URL + `gifs/${id}`, { headers: token });
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

  async updateGif(
    userId: string,
    gifId: string,
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

    return await axios
      .put(API_URL + `gifs/${gifId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data', ...token },
      })
      .then((response) => {
        console.log(response);
      });
  }

  async postGif(
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

    return await axios
      .post(API_URL + `gifs/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data', ...token },
      })
      .then((response) => {
        console.log(response);
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

  async postComment(
    userId: string,
    content: string,
    gifId: string,
    token: {
      Authorization: string;
    },
  ) {
    return axios.post(
      API_URL + `comments/`,
      { userId, content, gifId },
      { headers: token },
    );
  }
}

export default new dbService();
