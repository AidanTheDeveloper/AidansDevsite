import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = mount(<MemoryRouter><App /></MemoryRouter>)
});
