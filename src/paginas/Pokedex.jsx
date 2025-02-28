import ListaPokemon from "../componentes/ListaPokemon";
import { Link } from "react-router-dom";
import "../CSS/listaPokemon.css";

function Pokedex() {
    return (
        <div>
            <h1>Pokédex</h1>
            <Link to="/">
                <button className="pokemon_button">Volver al Inicio</button>
            </Link>
            <ListaPokemon />
        </div>
    );
}

export default Pokedex;

