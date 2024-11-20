import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bonjour from './components/Bonjour.jsx'
import MultipleFive from './components/findMultilpe.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const books = [
    {
      id: 1,
      label: 'book1'
    },
    {
      id: 2,
      label: 'book2'
    },
    {
      id: 3,
      label: 'book3'
    },
    {
      id: 4,
      label: 'book4'
    },
    {
      id: 5,
      label: 'book5'
    }
    
  ]

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Bonjour name={name} setName={setName} />
        <ul>
          {books.map(book => (
            <li key={book.id}>{book.label}</li>
          ))}
        </ul>
      </div>
      <div>
        <MultipleFive/>
      </div>
    </>
  )
}

export default App
