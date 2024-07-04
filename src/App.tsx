import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './pages/Home'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom';
import Ckeck from './pages/Check';

function App() {
  const [code, setTCode] = useState([]);
  return (
    <>
  <Menu />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/check' element={<Ckeck code={code}/>}/>
    <Route path='/list'/>
  </Routes>
    </>
  )
}

export default App
