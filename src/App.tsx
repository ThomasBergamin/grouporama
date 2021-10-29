/* eslint-disable react/react-in-jsx-scope */
import Navbar from './components/Navbar';
import Button from './components/Button';

const App: () => JSX.Element = () => {
  return (
    <>
      <Navbar />
      <Button primary label="Primary button "></Button>
      <Button secondary label="Secondary button"></Button>
      <Button tertiary label="Tertiary button"></Button>
    </>
  );
};

export default App;
