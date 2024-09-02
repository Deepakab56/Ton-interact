import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { TonConnectButton } from '@tonconnect/ui-react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from './Page/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<UserDetails />}></Route>
          

        </Routes></BrowserRouter>
    </>
  )
}

export default App
