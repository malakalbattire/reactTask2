import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const changeClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={changeClick}>Malak Albattire {count}</button>
    </>
  );
}

export default App;
