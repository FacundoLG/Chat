import './App.css';
import {io} from "socket.io-client"
import { FC, useEffect, useState } from 'react';

interface Message {
  username: string,
  message: string,
  time: Date
}

const App:FC = () => {
  const [room,setRoom] = useState<string>("global")
  const [ioClient,setIoClient] = useState<any>(null)
  const [messages,setMessages] = useState<Array<Message>>([])
  const [chatInputValue,setChatInputValue] = useState<string>("")
  
  useEffect(() => {
    setMessages([])
    setIoClient(io("http://localhost:3030", {transports: ["websocket"]}))
  },[room])
  console.log(ioClient)
  
  useEffect(() => {
    if(!ioClient || !room) return

    ioClient.on("connect",() => {
      ioClient.emit("joinRoom",room) 
      ioClient.on("resivedMessage", (newMessage:Message) => {
        setMessages(messages => [...messages, newMessage])
      })
      
    })
    return () => {
      ioClient.disconnect()
    }
  },[ioClient,room])
  
  const sendMessage = () => {
    const userMessage:Message = {
      username: ioClient.id,
      message: chatInputValue,
      time: new Date()
    }
   if(chatInputValue?.length > 0) ioClient.emit("sendMessage", userMessage)
  }
  // console.log(messages[0].time)
  return (
    <div className="App">
        <label htmlFor="room">Room</label>
        <input type="text" id='room' />
        <button onClick={() => {
          const roomText = document.querySelector<HTMLInputElement>("#room")?.value
          console.log(roomText)
          setRoom(roomText || "global")
        }}>Enter</button>
        <span>Current Room: </span>
        <div className='Messages'>
          {messages?.map(({username,message,time}) => (
            <div className='Message'>
              <p className='time'>{time.toString()}</p>
              <p><span className={username}>{username + ": "}</span> {message}</p>
            </div>
          ))}
        </div>
          <input id="chatInput" className='chatInput' type="text"
          value={chatInputValue}
          onChange={(e) => {
            setChatInputValue(e.target.value)
          }} />
            
            <button onClick={() => { 
              sendMessage(); 
              setChatInputValue("")    
            }}>Send Message</button>
    </div>
  );
}

export default App;
