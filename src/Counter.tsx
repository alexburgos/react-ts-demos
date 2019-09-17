import React, { useEffect, useState, FC } from 'react';

interface CounterProps {}

const Counter: FC = props => {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <div>Clicks: {clicks}</div>
      <button onClick={() => setClicks(clicks+1)}>+1</button>
      <button onClick={() => clicks === 0 ? null : setClicks(clicks-1)}>-1</button>
    </>
  );
};

export default Counter;
