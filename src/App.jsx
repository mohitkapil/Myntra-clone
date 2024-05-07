import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'


function App() {
  const [wishCount, setWishcount] = useState(0)
  const [addCount, setAddcount] = useState(0)


  return (
    <>
      <Navbar wishCount={wishCount} addCount={addCount} />
      <Main wishCount={wishCount} addCount={addCount} setWishcount={setWishcount} setAddcount={setAddcount} />
    </>
  )
}

export default App
