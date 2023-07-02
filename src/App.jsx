import { useState } from 'react'
import './App.css'

const BIRD_SIZE = 20;
const GAME_HEIGHT = 500;
const GAME_WIDTH = 500;

function App() {
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2 - BIRD_SIZE / 2);
  const [score, setScore] = useState(0)

  return (
    <div className='App'>
      <div style={{
        position: 'relative',
        "backgroundColor": "blue",
        width: `${GAME_HEIGHT}px`,
        height: `${GAME_WIDTH}px`,
      }}>
        <div style={{
          position: "absolute",
          backgroundColor: "red",
          width: `${BIRD_SIZE}px`,
          height: `${BIRD_SIZE}px`,
          borderRadius: "50%",
          top: `${birdPosition}px`,
        }}></div>
      </div>
    </div>
  )
}

export default App
