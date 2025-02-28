import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lista: JSON.parse(localStorage.getItem("tareas")) || [],
};

const tareasSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        agregarTarea: (state, action) => {
            state.lista.push({ texto: action.payload, completado: false });
            localStorage.setItem("tareas", JSON.stringify(state.lista));
        },
        eliminarTarea: (state, action) => {
            state.lista = state.lista.filter((_, i) => i !== action.payload);
            localStorage.setItem("tareas", JSON.stringify(state.lista));
        },
        alternarCompletado: (state, action) => {
            state.lista[action.payload].completado = !state.lista[action.payload].completado;
            localStorage.setItem("tareas", JSON.stringify(state.lista));
        },
    },
});

export const { agregarTarea, eliminarTarea, alternarCompletado } = tareasSlice.actions;
export default tareasSlice.reducer;
