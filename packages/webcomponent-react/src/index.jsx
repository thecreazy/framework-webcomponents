import React from 'react';
import ReactDOM from "react-dom";

import Counter from './components/Counter';

const Index = () => (
  <div id="webcomp-counter">
    <h1>Counter component</h1>
    <Counter />
  </div>
);

ReactDOM.render(<Index />, document.getElementById("react-component"))
