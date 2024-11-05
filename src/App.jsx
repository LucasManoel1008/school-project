import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Entretenimento from './assets/pages/Entretenimento'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entretenimento" element={<Entretenimento/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
