import React from 'react';
import Navbar from './components/Navbar';

const App: () => JSX.Element = () => {
  return (
    <>
      <Navbar searchInput authenticationBtn />
    </>
  );
};

export default App;
