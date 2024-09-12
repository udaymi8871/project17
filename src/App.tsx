import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ValueUpdate from './uday';

function App() {
  const [count, setCount] = useState<number>(5)
  return (
    <div>
      <ValueUpdate
        count={count}
        setCount={setCount}
      />

    </div>
  );
}

export default App;
