import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import '../CSS/listaTareas.css'


function ListaTareas(){
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        if (nuevaTarea.trim () === '') return;
        setTareas([...tareas, nuevaTarea]);
        setNuevaTarea('');
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    return(
        <div className="lista_container" >
            <h2>Lista de Tareas</h2>
            <input type="text" 
            placeholder="Escriba uan tarea..."
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={agregarTarea} >Agregar</button>

            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea} 
                        <button className="delete_btn" onClick={() => eliminarTarea(index)}><FaTrash /></button>
                    </li>
                ))}
            </ul>

        </div>
    );
};


export default ListaTareas;