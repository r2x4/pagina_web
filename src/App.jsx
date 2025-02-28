import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Pokedex from "./paginas/Pokedex";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
    );
}

export default App;





