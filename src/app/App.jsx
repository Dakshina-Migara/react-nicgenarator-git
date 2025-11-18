import { useState } from 'react'
import './App.css'
import Home from '../pages/Home/Home'
import { Navigate, Route ,Routes } from 'react-router-dom'
import InputPage from '../pages/InputPage/InputPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='*' element = {<Navigate to ={'/Home'} />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/InputPage' element={<InputPage />}></Route>
      </Routes >
    </>
  )
}

export default App 