import React from 'react';
import ReactDOM from "react-dom";

import Counter from './components/Counter';

const Index = () => (
  <>
    <h1>Counter component</h1>
    <Counter />
  </>
);

ReactDOM.render(<Index />, document.getElementById("react-component"));
