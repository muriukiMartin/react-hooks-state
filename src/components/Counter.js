import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
    <button onClick={increment}>Increment</button>
    <p>I have been clicked {count} times</p>
    </>
    );
}

export default Counter;
