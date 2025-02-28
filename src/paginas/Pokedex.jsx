import ListaPokemon from "../componentes/ListaPokemon";
import { Link } from "react-router-dom";
import "../CSS/listaPokemon.css";

function Pokedex() {
    return (
        <div>
            <Link to="/">
                <button className="pokemon_button">Volver al Inicio</button>
            </Link>
            <h1>Listado Pokemon</h1>
            <ListaPokemon />
        </div>
    );
}

export default Pokedex;

