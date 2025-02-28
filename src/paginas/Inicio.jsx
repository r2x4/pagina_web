import Contador from "../componentes/contador";
import ListaTareas from "../componentes/listaTareas";
import { Link } from "react-router-dom";
import "../CSS/botones.css";

function Inicio() {
    return (
        <div>
            <h1>¡Rodrigo, mi primer contador con React y Vite! 🚀</h1>
            <Contador />
            <ListaTareas />
            <div className="link_container">
                <Link to="/pokedex">
                    <button>Ver los Pokemon</button>
                </Link>
            </div>
        </div>
    );
}

export default Inicio;
