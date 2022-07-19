import './index.css'

const EmojiCard = props => {
  const {emojiDetails, addSCore} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onCheckResult = () => {
    addSCore(id)
  }
  return (
    <li className="li-emoji-container">
      <button type="button" className="button-size">
        <img
          src={emojiUrl}
          className="emoji-size"
          alt={emojiName}
          onClick={onCheckResult}
        />
      </button>
    </li>
  )
}

export default EmojiCard
