import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth/';

class AuthService {
  async login(email: string, password: string) {
    const response = await axios.post(API_URL + 'login', {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(
    lastName: string,
    firstName: string,
    email: string,
    password: string,
  ) {
    return axios.post(API_URL + 'signup', {
      lastName,
      firstName,
      email,
      password,
    });
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    } else {
      return undefined;
    }
  }
}

export default new AuthService();