import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Acción asíncrona para obtener los Pokémon
export const fetchPokemons = createAsyncThunk("pokemon/fetchPokemons", async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results;
});

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        lista: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.lista = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default pokemonSlice.reducer;
