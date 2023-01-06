import React from 'react';
import Comp from './components/Comp';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listItems = numbers.map((number) =>
    <li><Comp key={number} /></li>
  );
  return (
    <ol>{listItems}</ol>
  );
}

export default App;