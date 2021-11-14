import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';

import Counter from './components/Counter';

const Index = ({ startvalue }) => (
  <div id="webcomp-counter">
    <h1>Counter component in React</h1>
    <Counter defaultValue={startvalue} />
  </div>
);

Index.propTypes = {
  startvalue: PropTypes.number.isRequired,
};

customElements.define('react-counter', reactToWebComponent(Index, React, ReactDOM));
