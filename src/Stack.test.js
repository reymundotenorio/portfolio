import React from 'react';
import ReactDOM from 'react-dom';
import Stack from './Stack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stack />, div);
  ReactDOM.unmountComponentAtNode(div);
});
