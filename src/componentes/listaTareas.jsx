import { useSelector, useDispatch } from "react-redux";
import { agregarTarea, eliminarTarea, alternarCompletado } from "../redux/tareasSlice";
import FormularioTarea from "./formularioTarea";
import Tarea from "./tarea";
import "../CSS/listaTareas.css";

function ListaTareas() {
    const tareas = useSelector((state) => state.tareas.lista);
    const dispatch = useDispatch();

    return (
        <div className="lista_container">
            <h2>Lista de Tareas</h2>
            <FormularioTarea onAgregar={(texto) => dispatch(agregarTarea(texto))} />
            <ul>
                {tareas.map((tarea, index) => (
                    <Tarea
                        key={index}
                        index={index}
                        tarea={tarea}
                        onEliminar={() => dispatch(eliminarTarea(index))}
                        onToggle={() => dispatch(alternarCompletado(index))}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;

