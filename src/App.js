import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from './components/Redux/store'
import { Provider } from 'react-redux' 
import Navbar from "./components/Navbar/Navbar";
import Global from './pages/Global'
import Indonesia from './pages/Indonesia'
import Province from './pages/Province'
import About from './pages/About'
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Global/>}/>
      <Route path="/indonesia" element={<Indonesia/>}/>
      <Route path="/province" element={<Province/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    <Footer/>


    </div>
  )
}

export default App