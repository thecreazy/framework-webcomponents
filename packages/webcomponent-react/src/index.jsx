import React from 'react';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import PropTypes from "prop-types";

import Counter from './components/Counter';

const Index = (props) => (
  <div id="webcomp-counter">
    <h1>Counter component</h1>
    <Counter defaultValue={props.startvalue} />
  </div>
);

Index.propTypes = {
  startvalue: PropTypes.number.isRequired,
}

Index.defaultProps = {
  startvalue: 0
}

customElements.define("react-counter", reactToWebComponent(Index, React, ReactDOM));
