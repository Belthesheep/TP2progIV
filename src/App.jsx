import { useState } from 'react'
import reactLogo from './assets/vanillabelvectorized.svg'
import viteLogo from './assets/vanillabelvectorized.svg'
import './App.css'
import Textcontainmentcomp from './components/Textcontainmentcomp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <div>
        
        <Textcontainmentcomp/>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img src={viteLogo} className="logo" alt="a sheep" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img src={reactLogo} className="logo react" alt="another sheep" />
        </a>
      </div>
      <h1>Sheep Mitosis</h1>
      <div className="card">
        <button onClick={() => setCount((count) => (count + 1*((count/13)+2)))}>
          I am {count} meters closer to you.
        </button>
        <p>
          Edit your will and neck yourself RETARD
        </p>
      </div>
      <div>
        <p className="read-the-docs">
        Click on the sheep. Do it now.
        </p>
      </div>
    <footer></footer>
    </>
  )
}

export default App
