import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import Search from './pages/Search/Search'
const App = () => {
  return (
    <div>
      <Routes>
     <Route path='/' element={<Home />}></Route> 
     <Route path='/login' element={<Login />}></Route> 
     <Route path='/player/:id' element={<Player />}></Route>
     <Route path='/search' element={<Search />}></Route>
      </Routes>
    </div>
  )
}

export default App