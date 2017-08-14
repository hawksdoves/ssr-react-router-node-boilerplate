import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('Home', () => {
    it('should render correctly', () => {
        const component = shallow(<Home/>);
        expect(component).toMatchSnapshot() 
    })
})