import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

it('renders without crashing', () => {
  Enzyme.configure({adapter: new Adapter()})
  const wrapper = mount(<MemoryRouter><App /></MemoryRouter>)
});
