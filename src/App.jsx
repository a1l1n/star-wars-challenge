import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Films from './pages/films/Films';
const LazyCharacters = React.lazy(() => import('./pages/characters/Characters'))
import arturito from "./assets/svgs/r2-d2-icon.svg";
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <div className="films_tilt">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="films_tilt_shape"></path>
        </svg>
      </div>
      <img src={arturito} alt="r2-d2 image" className="arturito"/>
     
        <Routes>
          <Route exact path="/" element={<Films />}/>
          <Route exact path="/characters" 
            element={<React.Suspense fallback="Loading..." >
            <LazyCharacters />
            </React.Suspense>} />
        </Routes>  
      
    </>
  )
}

export default App
