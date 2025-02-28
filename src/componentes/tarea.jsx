import { FaTrash } from "react-icons/fa";

function Tarea({ tarea, index, onEliminar, onToggle }) {
    return (
        <li className={tarea.completado ? "completada" : ""}>
            <input 
                type="checkbox" 
                checked={tarea.completado} 
                onChange={() => onToggle(index)} 
            />
            {tarea.texto}
            <button className="delete_btn" onClick={() => onEliminar(index)}>
                <FaTrash />
            </button>
        </li>
    );
}

export default Tarea;
