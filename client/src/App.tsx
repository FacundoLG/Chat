import './App.css';
import {io} from "socket.io-client"
import { useEffect, useState } from 'react';


function App() {
  const [message,setMessage] = useState<string>()
  useEffect(()=> {
    const ioClient = io("http://localhost:3030", {transports: ["websocket"]})
   
    ioClient.on("message",(iomessage) => {
      setMessage(iomessage)
    })

    return () => {
      ioClient.disconnect()
    }
  },[])
  return (
    <div className="App">
        <h1>{message || "hi"}</h1>
    </div>
  );
}

export default App;
