import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import '../CSS/listaTareas.css'


function ListaTareas(){
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    //Cargar las tareas desde localStorage al iniciar

    useEffect(() => {
        try {
            const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
            if (Array.isArray(tareasGuardadas)) {
                setTareas(tareasGuardadas);
            } else {
                localStorage.removeItem("tareas"); // Elimina datos corruptos
            }
        } catch (error) {
            console.error("Error al leer localStorage:", error);
            localStorage.removeItem("tareas"); // Elimina datos corruptos
        }
    }, []);
    

    // guardar tareas en el loclStorage cunado cambien

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    },[tareas]);

    
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
            placeholder="Escriba una tarea..."
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