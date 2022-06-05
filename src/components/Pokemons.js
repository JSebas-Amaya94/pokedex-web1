import '../assets/pokemons.css'
import {firebase} from '../firebase'

const Pokemons =  ({pokemonArray}) => {
  const db = firebase.firestore(); 

  return (
    <>
      <h2 className='title'>POKEDEX</h2>
      <div className='parentBox'>
        {pokemonArray.map((pokemon, index) => (
          <button key={index} onClick={async () => {
            await db.collection("pokemons").add({name: pokemon.name, index})
            window.location.reload(false);
          }}>
            <div className='pokeBox'>
              {pokemon.name}
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt='pokemon official pokeapi pic'
              />
            </div>
          </button>
        ))}
      </div>
    </>
  )
}

export default Pokemons