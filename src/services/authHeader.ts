const authHeader = () => {
  const userToParse = localStorage.getItem('user');
  if (userToParse) {
    const user = JSON.parse(userToParse);
    if (user && user.token) {
      return { Authorization: 'Token ' + user.token };
    } else {
      return { Authorization: 'no token' };
    }
  }
  return { Authorization: 'no token' };
};

export default authHeader;
