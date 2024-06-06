import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Welcome from './components/Welcome';
import PokeSwipe from './components/PokeSwipe';
import LikedPokemon from './components/LikedPokemon';
import './App.css';

function App() {
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  const handleLike = (pokemon) => {
    const newLikedPokemon = [...likedPokemon, pokemon];
    setLikedPokemon(newLikedPokemon);

    if (newLikedPokemon.length >= 5) {
      navigate('/liked');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="container">
      <div className="nav-bar">
        <button className="toggle-button" onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/swipe" element={<PokeSwipe onLike={handleLike} />} />
        <Route path="/liked" element={<LikedPokemon likedPokemon={likedPokemon} />} />
      </Routes>
    </div>
  );
}

export default App;
