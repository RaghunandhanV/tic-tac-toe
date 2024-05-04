import { useState } from 'react';
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from './components/Log';

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((activePlayer) => activePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player-A" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player-B" symbol="O" isActive={activePlayer === 'O'}/>          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
