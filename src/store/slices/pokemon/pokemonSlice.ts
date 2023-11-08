import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  page: number,
  pokemons: [],
  isLoading: boolean,
}

const initialState: CounterState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<CounterState>) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.pokemons = action.payload.pokemons;
    }
  },
})

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer