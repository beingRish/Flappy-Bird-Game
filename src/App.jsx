import { useEffect, useState } from 'react'
import './App.css'

const BIRD_SIZE = 20;
const GAME_HEIGHT = 500;
const GAME_WIDTH = 500;

function App() {
  const [startGame, setStartGame] = useState(false);
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2 - BIRD_SIZE / 2);
  const [score, setScore] = useState(0)

  useEffect(() => {
    let interval = null;
    if (startGame) {
      interval = setInterval(() => {
        if (birdPosition < GAME_HEIGHT - BIRD_SIZE) {
          setBirdPosition(birdPosition => birdPosition + 4);
        }
      }, 24);
    }
    return () => clearInterval(interval);
  }, [startGame, birdPosition])

  return (
    <div className='App'>
      <div 
        onClick={
          () => {
            const newBirdPosition = birdPosition - 50
            if(newBirdPosition > 0) {
              setBirdPosition(birdPosition => birdPosition - 50);
            }
            else{
              setBirdPosition(0);
            }
          }
        }
        style={{
          position: 'relative',
          "backgroundColor": "blue",
          width: `${GAME_HEIGHT}px`,
          height: `${GAME_WIDTH}px`,
      }}>

      <div 
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: `${BIRD_SIZE}px`,
          height: `${BIRD_SIZE}px`,
          borderRadius: "50%",
          top: `${birdPosition}px`,
        }} />
      </div>

      <button onClick={() => { setStartGame(true) }}>Start Game</button>

    </div>
  )
}

export default App
