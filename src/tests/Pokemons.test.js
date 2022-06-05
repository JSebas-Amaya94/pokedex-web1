import { shallow } from 'enzyme';
import Pokemons from '../components/Pokemons';

describe('Testing the title for pokemons component',() => {
  test('it needs to have an h2 with POKEDEX', () =>{
    const array = [{name:'charizard', index: '5'}]
    const wrapper = shallow( <Pokemons pokemonArray={array}/>);
    expect(wrapper.contains(<h2 className='title'>POKEDEX</h2>)).toBe(true);
  })
})

describe('Testing the length for the array',() => {
  test('array length should be 0', () =>{
    const array = []
    const wrapper = shallow( <Pokemons pokemonArray={array}/>);
    expect(wrapper.find('pokemonArray').length).toBe(0);
  })
})

describe('Element that does not exist',() => {
  test('that a non existing element is false', () =>{
    const array = []
    const wrapper = shallow( <Pokemons pokemonArray={array}/>);
    expect(wrapper.find('ul').exists()).toBe(false)
    expect(wrapper.contains(<div className='pokeBox' />)).toBe(false)
    expect(wrapper.contains(<div className='not existing' />)).toBe(false)
  })
})

describe('Testing the title classname',() => {
  test('it needs to have an title classname', () =>{
    const array = []
    const wrapper = shallow( <Pokemons pokemonArray={array}/>);
    expect(wrapper.find('h2').prop('className')).toBe('title');
  })
})

describe('Testing the parentclass',() => {
  test('it needs to have an the component correct parentclass', () =>{
    const array = []
    const wrapper = shallow( <Pokemons pokemonArray={array}/>);
    expect(wrapper.find('div').prop('className')).toBe('parentBox');
  })
})



