import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from './BackButton';
import './PokeSwipe.css';

function PokeSwipe({ onLike }) {
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async () => {
        const randomId = Math.floor(Math.random() * 100) + 1;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        setPokemon(response.data);
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    const handleLike = () => {
        if (pokemon) {
            onLike(pokemon);
            fetchPokemon();
        }
    };

    const handleDislike = () => {
        fetchPokemon();
    };

    return (
        <div className="poke-swipe">
            {pokemon && (
                <>
                    <div
                        className="background-image"
                        style={{
                            backgroundImage: pokemon ? `url(${pokemon.sprites.other['dream_world'].front_default})` : 'none'
                        }}
                    />
                    <BackButton />
                    <div className="pokemon-card" style={{ maxWidth: "30%" }}>
                        <img src={pokemon.sprites.other['dream_world'].front_default} alt={pokemon.name} />
                        <h2>{pokemon.name}</h2>
                        <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                        <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                        <div>
                            <button onClick={handleLike}>Like</button>
                            <button onClick={handleDislike}>Dislike</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default PokeSwipe;

