import {useState, useEffect} from 'react'
import '../assets/pokemonTeam.css'
import {firebase} from '../firebase'

const PokemonTeam =  () => {

  const [team, setTeam] = useState([])

  useEffect(() => {
    const db = firebase.firestore(); 
    const getTeam = async() => {
      const data = await db.collection("pokemons").get()
      const pokemons = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setTeam(pokemons)
    }
    getTeam()
  }, [])

  return (
    <div className='parentBoxTeam'>
      <h2 className='title'>MY TEAM</h2>
      <div className="teamBox">
        {team.map((pokemon, index) => (
          <div key={index} className='pokeBox'>
            {pokemon.name}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index + 1}.png`}
              alt='pokemon'
            />
            <button className='deleteButton' onClick={async ()=>{
              const db = firebase.firestore(); 
              await db.collection("pokemons").doc(pokemon.id).delete();
              window.location.reload(false);
            }}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonTeam