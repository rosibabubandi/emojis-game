import './index.css'

const NavBar = props => {
  const {navBarResult} = props
  const {gameProgress, progressGameScore, topScore} = navBarResult

  return (
    <nav className="nav-bar-background-container">
      <ul className="nav-items-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-image-size"
          alt="emoji logo"
        />
        <h1 className="game-title-scores-text">Emoji Game</h1>
      </ul>
      {gameProgress ? (
        <div className="nav-items-container">
          <p className="game-title-scores-text">Score: {progressGameScore}</p>
          <p className="game-title-scores-text">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
