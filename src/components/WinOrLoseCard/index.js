import './index.css'

const WinOrLoseGame = props => {
  const {winOrLoseResult, setToPlayNewGame} = props
  const {progressGameScore} = winOrLoseResult

  const maxGameTopScore = 12
  const gameResult = progressGameScore === maxGameTopScore

  const setNewGame = () => {
    setToPlayNewGame()
  }

  return (
    <div className="win-or-lose-card-container">
      {gameResult ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="result-emoji-image-size"
          alt="win or lose"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="result-emoji-image-size"
          alt="win or lose"
        />
      )}
      <div className="result-text-play-again-container">
        {gameResult ? (
          <h1 className="win-result-text">You Won</h1>
        ) : (
          <h1 className="win-result-text">You Lose</h1>
        )}
        {gameResult ? (
          <p className="score-text">Best Score</p>
        ) : (
          <p className="score-text">Score</p>
        )}
        <p className="score-numbers">
          {progressGameScore}/{maxGameTopScore}
        </p>
        <button
          type="button"
          className="play-again-button"
          onClick={setNewGame}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseGame
