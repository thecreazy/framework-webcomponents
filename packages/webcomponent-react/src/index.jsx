import React from 'react';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

import Counter from './components/Counter';

const Index = () => (
  <div id="webcomp-counter">
    <h1>Counter component</h1>
    <Counter />
  </div>
);

customElements.define("react-counter", reactToWebComponent(Index, React, ReactDOM));
