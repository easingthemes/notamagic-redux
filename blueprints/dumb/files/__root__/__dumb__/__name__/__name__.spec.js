import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// temp
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

import <%= pascalEntityName %> from './<%= pascalEntityName %>';

describe('<<%= pascalEntityName %> />', () => {
  it('renders without crashing', () => {
    shallow(<<%= pascalEntityName %> />);
  });

  it('renders div', () => {
    const wrapper = shallow(<<%= pascalEntityName %> />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
