import { useEffect, useState } from "react";
import FormularioTarea from "./formularioTarea";
import Tarea from "./tarea";
import "../CSS/listaTareas.css";

function ListaTareas() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
        setTareas(tareasGuardadas);
    }, []);

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = (texto) => {
        const nuevaTarea = { texto, completado: false };
        setTareas([...tareas, nuevaTarea]);
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    const alternarCompletado = (index) => {
        setTareas(
            tareas.map((tarea, i) =>
                i === index ? { ...tarea, completado: !tarea.completado } : tarea
            )
        );
    };

    return (
        <div className="lista_container">
            <h2>Lista de Tareas</h2>
            <FormularioTarea onAgregar={agregarTarea} />
            <ul>
                {tareas.map((tarea, index) => (
                    <Tarea 
                        key={index} 
                        index={index} 
                        tarea={tarea} 
                        onEliminar={eliminarTarea} 
                        onToggle={alternarCompletado} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;
