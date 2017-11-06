import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// temp
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

import Logo from './Logo';

describe('<Logo />', () => {
  it('renders without crashing', () => {
    shallow(<Logo />);
  });

  it('renders div', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
