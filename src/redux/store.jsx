import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./tareasSlice";
import pokemonReducer from "./pokemonSlice"; 

export const store = configureStore({
    reducer: {
        tareas: tareasReducer,
        pokemon: pokemonReducer, 
    },
});
