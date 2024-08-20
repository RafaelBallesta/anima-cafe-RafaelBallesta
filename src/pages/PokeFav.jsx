import { useState, useEffect } from "react";

export const PokeFav = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            const storedPokemon = localStorage.getItem('pokemon');
            if (storedPokemon) {
                setPokemon(JSON.parse(storedPokemon));
            } else {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/');
                const data = await response.json();
                setPokemon(data);
                localStorage.setItem('pokemon', JSON.stringify(data));
            }
        }
        fetchPokemon();
    }, []);

    return (
        <div>
            <h1>PokeFav</h1>
            {pokemon ? (
                <div>
                    <p>Name: {pokemon.name}</p>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}