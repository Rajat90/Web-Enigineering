
import React from 'react';
import { render } from 'react-dom';
import Game from './updownapp.js';

function App () {
  return <h1>Hello World!!
    <Game></Game>
  </h1>

}

render(<App />, document.getElementById('root'));