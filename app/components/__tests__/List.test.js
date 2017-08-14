import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';

const mockPokemon = [
    {
        pokemon: {
            name: 'friendly'
        }
    }
];

const mockLocation = {
    match: {
        params: {
            ability: 'swagger'
        }
    }
}

describe('List', () => {
    it('should render correctly when given location', () => {
        const mockPokemon = [
            {
                pokemon: {
                    name: 'friendly'
                }
            }
        ];
        const mockLocation = {
            match: {
                params: {
                    ability: 'swagger'
                }
            }
        }
        const component = shallow(<List pokemon={mockPokemon} location={mockLocation} />);
        expect(component).toMatchSnapshot();
    })

    it('should render correctly when not given location', () => {
        const mockPokemon = [
            {
                pokemon: {
                    name: 'friendly'
                }
            }
        ];
        const mockLocation = {
            match: {
                params: {
                    ability: 'swagger'
                }
            }
        }
        const component = shallow(<List pokemon={mockPokemon} location={mockLocation} />);
        expect(component).toMatchSnapshot();
    })
})
