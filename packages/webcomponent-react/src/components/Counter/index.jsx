import React, { useEffect, useState } from 'react';

import event from '../../../../../constants/event';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const customEvent = new CustomEvent(event.react.actualValue, {detail: count})
    window.dispatchEvent(customEvent);
  }, [count]);

  const onInc = () => {
    setCount(prev => prev + 1);
    const customEvent = new CustomEvent(event.react.incValue, {detail: count})
    window.dispatchEvent(customEvent);
  }

  const onDec = () => {
    setCount(prev => prev - 1);
    const customEvent = new CustomEvent(event.react.decValue, {detail: count})
    window.dispatchEvent(customEvent);
  }

  return <>
    <h2>Counter: <b>{count}</b></h2>
    <button onClick={onInc}>Increment</button>
    <button onClick={onDec}>Decrement</button>
  </>;
}

export default Counter
