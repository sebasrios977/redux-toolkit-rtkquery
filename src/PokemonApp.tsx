import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks";
import { RootState } from "./store/store";
import { Pokemon } from "./interfaces/pokemon.interface";

const PokemonApp = () => {

    const {pokemons, isLoading, page} = useSelector((state: RootState) => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getPokemons())    
    }, []);
    
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />

        <span>Loading: {isLoading ? 'True' : 'False'}</span>

        <ul>
            {pokemons.map((pokemon: Pokemon) => (
              <li key={pokemon.url}>{pokemon.name}</li>
            ))}
        </ul>

        <button 
          disabled={isLoading}
          onClick={() => dispatch<any>(getPokemons(page))}

        >
              Next
        </button>
    </>
  )
}

export default PokemonApp
