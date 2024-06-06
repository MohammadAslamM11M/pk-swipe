import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import '../App.css';

function Welcome() {
    const navigate = useNavigate();
    return (
        <>
            <BackButton />
            <div className="welcome">
                <div className="Welcome-message">
                    <h1 style={{ fontWeight: "bold" }}>Welcome to PokéSwipe!</h1>
                    <p>Swipe through Pokémon and choose your favorites!</p>
                </div>
                <div className="pokemon-card">
                    <h3 style={{ fontWeight: "bold" }}>How to Play PokeSwipe</h3>
                    <p>Pokemon Appear One at a Time</p>
                    <p>Choose "Like" or "Dislike"</p>
                    <p>Build Your Favorite Team</p>
                    <button className="letsgo-button" onClick={() => navigate('/swipe')}>Let's Go!</button>
                </div>
            </div>
        </>
    );
}

export default Welcome;
