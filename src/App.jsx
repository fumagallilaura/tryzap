import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import Login from './pages/Login';

import Routes from './Routes';

function App() {
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    const newSocket = io('http://localhost:3001');

    setSocket(newSocket);
  }, [])

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
