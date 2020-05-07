import React from 'react';
import './App.css';
import once from './components/once';

const click_bait = (param) => {console.log(param + ' clicked bait')};
const onlyo = once(click_bait)('joey');
function App() {
  return (
    <div className="App">
      <button id="clickBait" onClick={onlyo}>click me</button>
    </div>
  );
}

export default App;
