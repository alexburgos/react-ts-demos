import React, { useEffect, useState } from 'react';

interface TimerProps {
  count: number
};

const Timer = (props: TimerProps) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(timer);
  });


  return (
    <>
      <div>Count: {count}</div>
      <button onClick={ () => setCount(0)}>Reset</button>
    </>
  );
}

export default Timer;


/* Using React Function Component Shorthand */

// import React, { useEffect, useState, FC } from "react";

// interface TimerProps {
//   count: number;
// }

// const Timer: FC<TimerProps> = props => {
//   const [count, setCount] = useState(props.count);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   });

//   return <div>Count: {count}</div>;
// };

// export default Timer;
