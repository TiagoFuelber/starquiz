import React from 'react';
import { render } from 'react-dom';

const rootEl = document.getElementById('app');

render(<h1>StarQuiz</h1>, rootEl);

if (module.hot) {
  module.hot.accept();
}
