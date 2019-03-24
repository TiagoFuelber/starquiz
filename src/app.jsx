import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './styles/global-style.style';
import StartPage from './modules/start-page/start-page';
import GamePage from './modules/game/game-page';

const App = () => (
  <BrowserRouter>
    <Normalize />
    <GlobalStyle />
    <Route path="/" exact component={StartPage} />
    <Route path="/game" component={GamePage} />
  </BrowserRouter>
);

export default App;
