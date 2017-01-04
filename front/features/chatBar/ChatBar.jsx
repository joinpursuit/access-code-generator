
const ChatBar = props => {
  const handleChange = event =>{

  }

  const sendMessage = () => {

  }

  return (
    <div className="chat_bar">
      <input 
        type='text'
        onChange={handleChange}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default ChatBar