import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

const selectedEmojiIdList = []

class EmojiGame extends Component {
  state = {
    selectIdList: selectedEmojiIdList,
    gameProgress: true,
    progressGameScore: 0,
    topScore: 0,
  }

  onAddScore = id => {
    const {selectIdList, gameProgress} = this.state
    const numberOfEmojis = selectIdList.length
    const checkForUniqueClick = selectIdList.some(eachId => id === eachId)

    if (numberOfEmojis < 11) {
      if (checkForUniqueClick) {
        this.setState({gameProgress: false})
      } else if (gameProgress) {
        this.setState(prevState => ({
          selectIdList: [...prevState.selectIdList, id],
          progressGameScore: prevState.progressGameScore + 1,
        }))
      }
    } else if (numberOfEmojis === 11) {
      if (checkForUniqueClick) {
        this.setState({gameProgress: false})
      } else {
        this.setState(prevState => ({
          gameProgress: false,
          progressGameScore: prevState.progressGameScore + 1,
        }))
      }
    } else {
      this.setState({gameProgress: false})
    }
  }

  setToPlayNewGame = () => {
    const {progressGameScore, topScore} = this.state
    const newTopScore = progressGameScore
    this.setState({selectIdList: []})
    if (newTopScore > topScore) {
      this.setState({
        topScore: newTopScore,
        progressGameScore: 0,
        gameProgress: true,
      })
    } else {
      this.setState({
        progressGameScore: 0,
        gameProgress: true,
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {gameProgress, progressGameScore, topScore} = this.state
    const navBarResult = {gameProgress, progressGameScore, topScore}
    const winOrLoseResult = {progressGameScore, topScore}

    const randomShuffledEmojiList = this.shuffledEmojisList()

    return (
      <div className="main-container">
        <NavBar navBarResult={navBarResult} />
        {gameProgress ? (
          <ul className="emoji-card-container">
            {randomShuffledEmojiList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                addSCore={this.onAddScore}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            winOrLoseResult={winOrLoseResult}
            setToPlayNewGame={this.setToPlayNewGame}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
