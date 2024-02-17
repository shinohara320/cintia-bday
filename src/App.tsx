import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/hero';
import Audio from './components/Audio'
import Gallery from './components/Gallery'
import Message from './components/Message'

const App: React.FC = () => {
  const updateHolographicBackground = (value: number): void => {
    const holographicElement = document.getElementById("holographic");
    if (holographicElement) {
      const percentage: number = value * 100;
      holographicElement.style.backgroundPosition = percentage + "%";
    }
  };

  const handleMouseMove = (event: MouseEvent): void => {
    const x: number = event.clientX;
    const width: number = document.documentElement.clientWidth;
    const value: number = x / width;
    updateHolographicBackground(value);
  };

  const handleDeviceOrientation = (event: DeviceOrientationEvent): void => {
    if (event.alpha !== null) {
      const z: number = Math.abs(event.alpha); 
      const value: number = z / 360;
      updateHolographicBackground(value);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleDeviceOrientation, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation, true);
    };
  }, []); 

  return (
    <div id='holographic'>
      <Hero />
      <Audio/>
      <Gallery/>
      <Message/>
    </div>
  );
};

export default App;
