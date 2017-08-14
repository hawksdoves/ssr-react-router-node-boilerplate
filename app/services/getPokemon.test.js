import getPokemon from './getPokemon';
import request from 'axios';

jest.mock('axios')

request.get.mockReturnValue('testing')

const baseUrl = 'http://pokeapi.co/api/v2/ability';

describe('getPokemon', () => {
    it('', () => {
        expect(getPokemon.withAbility('mind control')).toEqual('testing');
        expect(request.get).toHaveBeenCalledWith(`${baseUrl}/mind control`);
    })
})