import { useState } from 'react'
import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import AboutDetail from './pages/AboutDetail'
import Company from './pages/Company'
import NotFound from './pages/NotFound'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:id' element={<AboutDetail/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/board' element={<Board/>}/>
        <Route path='/board/:id' element={<BoardDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
