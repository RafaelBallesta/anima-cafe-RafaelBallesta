import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PokemonElejido = () => {
    const { pokeID } = useParams(); // Asegúrate de importar useParams
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching the Pokémon:", error);
            }
        }

        fetchPokemon();
    }, [pokeID]); // Añadí pokeID como dependencia

    return (
        <div>
            <h1>PokeFav</h1>
            {pokemon ? (
                <div>
                    <p>Id: {pokemon.id}</p>
                    <p>Nombre: {pokemon.name}</p>
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
