import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(0)

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => {
      console.error("Error fetching Message", err);
    });
  }, []);

  return (
    <>
      <h1>This is frontend</h1>
      <h2>Data: {message} </h2>
    </>
  )
}

export default App
