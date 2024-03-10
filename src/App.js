import './styles.css'
import { useState, useEffect } from 'react'
import Chatbot from 'react-chatbot-kit'
import config from './chatbotConfig'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import logo from './assets/img/logo.png'
// import { getData } from "./data";

export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      <h2>FUW Students Chatbot </h2>
      <div className="test">
        {' '}
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          style={{ width: '100vw', backgroundColor: 'red' }}
        />
      </div>
    </div>
  )
}
