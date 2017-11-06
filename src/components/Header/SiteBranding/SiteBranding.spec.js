import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

import SiteBranding from './SiteBranding';

describe('<SiteBranding />', () => {
  it('renders without crashing', () => {
    shallow(<SiteBranding />);
  });
});
