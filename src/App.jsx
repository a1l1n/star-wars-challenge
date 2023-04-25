import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import './App.css';
import Films from './pages/films/Films';
import Characters from './pages/characters/Characters';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Films />}/>
        <Route exact path="/characters" element={<Characters />} />
      </Routes>  
    </>
  )
}

export default App
