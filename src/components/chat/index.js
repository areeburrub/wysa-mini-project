import React from 'react'
import Bubble from './chatBubble'
import styles from './chat.module.css'
import { useEffect, useState, useRef } from 'react'

const ChatBox = () => {

  const msgEndRef = useRef(null)
  
  const messages = [
    {
      text: "Hello!",
      type: "botMsg",
    },
    {
      text: "How can I help you?",
      type: "botMsg",
    },
    {
      text: "I want to know about the weather in London",
      type: "userMsg",
    },
    {
      imgSrc: "http://unsplash.it/400/600?random=1",
      type: "botImg",
    },
    {
      text: "The weather is fine",
      type: "botMsg",
    }
  ];

  const [messagesState, setMessagesState] = useState(messages);
  const [userInput, setUserInput] = useState('');


  const HandelSubmit = (e) => {
    e.preventDefault()
    if (userInput.length > 0) {
      setMessagesState([...messagesState, { text: userInput, type: "userMsg" }])
      setBotTyping(true)
      setUserInput('')
    }
  }


  const [BotTyping, setBotTyping] = useState(false)

  const getBotResponse = (userMsg) => {
    fetch('/api/bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userMsg: userMsg
      })
    })
      .then(res => res.json())
      .then(data => {
        setMessagesState(
          [...messagesState, ...data.messages])
        setBotTyping(false)
      })
  }



  useEffect(() => {
    msgEndRef.current.scrollIntoView({ behavior: "smooth" })
    messagesState[messagesState.length - 1].type == "userMsg" && getBotResponse(messagesState[messagesState.length - 1].text)
  } , [messagesState])

  return (
    <div>
      <div className={styles.chatContainer}>
          {
            messagesState.map((msg, index) => {
              return (
                <Bubble key={index} type={msg.type} msg={msg?.text} imgSrc={msg?.imgSrc} />
              )
            })
          }
        {BotTyping && <Bubble type='botMsg' msg='...'/>}
        <span className={styles.msgEnd} ref={msgEndRef}></span>
      </div>
      <form onSubmit={HandelSubmit} className={styles.chatInput}>
        <input 
          name="message"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          autoFocus
          placeholder="Type your message here..."/>
      </form>
    </div>
  )
}

export default ChatBox