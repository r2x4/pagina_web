import { useState } from "react";

function FormularioTarea({ onAgregar }) {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (nuevaTarea.trim() === "") return;
        onAgregar(nuevaTarea);
        setNuevaTarea("");
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input 
                type="text" 
                placeholder="Escribe una tarea..." 
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default FormularioTarea;
