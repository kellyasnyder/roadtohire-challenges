import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './react_1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello />, div);
  ReactDOM.unmountComponentAtNode(div);
});
