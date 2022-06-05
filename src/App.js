import './App.css';
import useGetPokemons  from './hooks/usePokemons'
import Pokemons from './components/Pokemons';
import PokemonTeam from './components/PokemonTeam';
import {useState, useEffect} from 'react'

const App = () => {
  const pokemons = useGetPokemons('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
  return (
    <div className='animate__animated animate__fadeIn animate__delay-1s'>
      <img className='pokemon-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="main logo" />
      <PokemonTeam />
      { pokemons && <Pokemons pokemonArray={pokemons}/> }
      <h4 className='footer'>developed by amayaDev94</h4>
    </div>
  );
}

export default App;
