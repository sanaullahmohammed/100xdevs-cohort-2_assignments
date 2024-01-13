/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  // Empty dependency-array indicates that function is pure and needn't be recreated for varying states
  const handleIncrement = useCallback(() => {
    console.log(
      `Increment triggered, setting value from ${count} to ${count + 1}...`
    );
    setCount((count) => count + 1); // We are using this initialization of setCount to ensure we have the most recent value, since this function is only created once (component-mounts)
  }, []);

  // Empty dependency-array indicates that function is pure and needn't be recreated for varying states
  const handleDecrement = useCallback(() => {
    console.log(
      `Decrement triggered, setting value from ${count} to ${count - 1}...`
    );
    setCount(count - 1);
  }, [count]); // We are declaring the dependency array here to ensure that the function is recreated upon every change of state, so as to not use the initial count value time and again (since this function is only created once during component-mounting)

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = ({ onIncrement, onDecrement }) => {
  // Intended for understanding the behaviour better
  useEffect(() => {
    console.log(
      `This is displayed due to onDecrement handler function being recreated`
    );
  }, [onDecrement]);
  useEffect(() => {
    console.log(
      `This must be displayed only during component-mount due to onIncrement handler config`
    );
  }, [onIncrement]);

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};
