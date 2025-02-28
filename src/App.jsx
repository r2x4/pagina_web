import Contador from "./componentes/contador";
import ListaTareas from "./componentes/listaTareas";
import ListaPokemon from "./componentes/ListaPokemon";

function App() {
    return (
        <div className="app_container">
            <h1>¡Rodrigo, mi primer contador con React y Vite! 🚀</h1>
            <Contador />
            <ListaTareas />
            <ListaPokemon /> {/* Agregamos la Pokédex aquí */}
        </div>
    );
}

export default App;


