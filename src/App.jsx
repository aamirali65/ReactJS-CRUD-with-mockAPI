import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fetch from './components/home/Fetch'
import Add from './components/home/Add'
import Update from './components/home/Update'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Fetch/>}></Route>
      <Route path='/home' element={<Fetch/>}></Route>
      <Route path='/add-user' element={<Add/>}></Route>
      <Route path='/edit-user' element={<Update/>}></Route>
    </Routes>
    </>
  )
}

export default App