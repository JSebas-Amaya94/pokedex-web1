import { shallow } from 'enzyme';
import PokemonTeam from '../components/PokemonTeam';

describe('Testing the title for pokemon team component',() => {
  test('it needs to have an h2 with MY TEAM', () =>{
    const wrapper = shallow( <PokemonTeam />);
    expect(wrapper.contains(<h2 className='title'>MY TEAM</h2>)).toBe(true);
  })
})

describe('Testing the title classname',() => {
  test('it needs to have an title classname', () =>{
    const wrapper = shallow( <PokemonTeam />);
    expect(wrapper.find('h2').prop('className')).toBe('title');
  })
})

