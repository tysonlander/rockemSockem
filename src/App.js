import React from 'react';
import './App.css';
import Combos from './Components/Combos/Combos'
import SignUp from './Components/Ring/SignUp'

function App() {
  return (
    <div className="App">
      <img src="https://media.gq.com/photos/5aac26f0a980810c2d4f23d7/16:9/w_1280%2Cc_limit/rockem.gif" alt="super awesome gif"/>
      <SignUp/>
      <Combos/>
    </div>
  );
}

export default App;
