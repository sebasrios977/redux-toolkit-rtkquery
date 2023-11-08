import { Action, Dispatch } from "@reduxjs/toolkit";
import { CounterState, setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = (page: number = 0) => {

    return async (dispatch: Dispatch<Action>, getState: CounterState) => {
        dispatch(startLoadingPokemons());
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        dispatch( setPokemons({isLoading: false, page: page + 1, pokemons: data.results}) );
    }
}