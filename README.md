import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8080/myapp/api/hello', {
      method: 'GET',
      credentials: 'include', // important if using cookies/auth
    })
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok")
        return response.text()
      })
      .then(data => setMessage(data))
      .catch(err => setMessage("Error: " + err.message))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Spring Demo</h1>
      <p>{message}</p>
    </div>
  )
}

export default App



