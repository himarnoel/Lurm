import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import Upload from './Pages/Upload';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" ">
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  )
}

export default App