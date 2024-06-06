import React from 'react';
import BackButton from './BackButton';
import "./LikedPokemon.css";

function LikedPokemon({ likedPokemon }) {
    return (
        <div className="liked-pokemon">
            <BackButton />
            <h2>Your Liked Pokémon</h2>
            <div className="pokemon-list">
                {likedPokemon.map((pokemon, index) => (
                    <div key={index} className="pokemon-card card">
                        <img src={pokemon.sprites.other['dream_world'].front_default} alt={pokemon.name} />
                        <h3>{pokemon.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LikedPokemon;
