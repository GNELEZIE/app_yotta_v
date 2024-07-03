import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './pages/Home'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
  <Menu />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/add' />
    <Route path='/list'/>
  </Routes>
    </>
  )
}

export default App
