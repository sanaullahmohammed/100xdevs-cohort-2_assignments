import React, { useState, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const renderCnt = useRef(0);
  const [, forceRender] = useState(0);

  const handleReRender = () => {
    // Update state to force re-render
    forceRender(Math.random());
  };

  renderCnt.current = renderCnt.current + 1; // Will be triggered twice in StrictMode (fire -> cleanup -> fire)

  return (
    <div>
      <p>This component has rendered {renderCnt.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
