import { useEffect, useState } from "react";
import "../CSS/listaPokemon.css";

function ListaPokemon() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
    const fetchPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();
        const pokemons = await Promise.all(
        data.results.map(async (pokemon) => {
            const pokemonDetails = await fetch(pokemon.url);
            const details = await pokemonDetails.json();
            return details;
        })
        );
        setPokemonData(pokemons);
    };
    fetchPokemons();
    }, []);

    return (
    <div className="pokemon_container">
        <div className="pokemon_grid">
            {pokemonData.map((pokemon) => (
            <div key={pokemon.id} className="pokemon_card">
                <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon_image"
                />
                    <p>{pokemon.name}</p>
                    <p className="pokemon_type">
                        {pokemon.types.map((type) => type.type.name).join(", ")}
                    </p>
                    <p className="pokemon_hp">HP: {pokemon.stats[0].base_stat}</p>
                    <p className="pokemon_attack">Attack: {pokemon.stats[1].base_stat}</p>
                    <p className="pokemon_defense">Defense: {pokemon.stats[2].base_stat}</p>
            </div>
            ))}
            </div>
        </div>
    );
}

export default ListaPokemon;

