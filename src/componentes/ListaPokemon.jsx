import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/pokemonSlice";
import "../CSS/listaPokemon.css";

function ListaPokemon() {
    const dispatch = useDispatch();
    const { lista, status, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPokemons());
        }
    }, [status, dispatch]);

    return (
        <div className="pokemon_container">
            <h2>Pokédex</h2>
            {status === "loading" && <p>Cargando Pokémon...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            <div className="pokemon_grid">
                {lista.map((pokemon, index) => (
                    <div key={index} className="pokemon_card">
                        <p>{pokemon.name}</p>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                            alt={pokemon.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaPokemon;
