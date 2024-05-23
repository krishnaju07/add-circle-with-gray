import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [circles, setCircles] = useState([]);
  const [gray, setGray] = useState([]);

  const addCircle = () => {
    setCircles([...circles, circles.length + 1]);
    setGray([...gray, false]); // Initialize all circles as not gray initially
  };

  const increaseGray = (index) => {
    const newGray = [...gray];
    newGray[index] = true; // Set the clicked circle as gray
    setGray(newGray);
  };

  return (
    <div className="App">
      <button onClick={addCircle}>Add circle</button>
      <h5>Gray color circle: {gray.filter((g) => g).length}</h5>{' '}
      {/* Count the gray circles */}
      <ul>
        {circles.map((item, index) => {
          return (
            <li
              key={index}
              className={gray[index] ? 'circle gray' : 'circle'} // Apply gray class conditionally
              onClick={() => increaseGray(index)} // Pass index to identify which circle is clicked
            >
              {''}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
