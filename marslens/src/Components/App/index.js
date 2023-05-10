import './App.css';
// import WeatherAPI from '../WeatherAPI/Weather API';
import Photo from '../PhotoAPI/index.js';
import Weather from '../WeatherAPI/index.js';
import { useState } from 'react';

function App()
{
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function nextPhoto() {
      setCurrentIndex(currentIndex + 1);
    }
    function previousPhoto() {
      if (currentIndex === 0) {setCurrentIndex(currentIndex)}
      else {setCurrentIndex(currentIndex - 1)};
    }




  return (
    <div className="App">
      <h1 className="whiteText">MarsLENS</h1>
      <h2>React App for Viewing Mars Rover Images and Weather</h2>
      <div className="photofull">
        <button className="nextlast" onClick={() => { previousPhoto() }}>&lt;</button>
        <Photo className="image" onClick={() => { nextPhoto() }} currentIndex={ currentIndex } />
        <button className="nextlast" onClick={() => { nextPhoto() }}>&gt;</button>
      </div>
      <div className="weatherwidget">
        <h3>Mars Weather</h3>
        <p>High: 80°F</p>
        <p>Low: -100°F</p>
        <p>Wind Speed: 5 mph</p>
      </div>
    </div>
  );
}

export default App;
