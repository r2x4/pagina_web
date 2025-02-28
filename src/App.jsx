import Contador from "./componentes/contador";
import ListarTarea from "./componentes/listaTareas"


function App() {
  return (
    <div className="app_container">
      <h1>¡Rodrigo Mi primer contador con React y Vite! 🚀</h1>
      <Contador />
      <ListarTarea /> {/* Agregamos el componente Aqui */}
    </div>
  );
}

export default App;

