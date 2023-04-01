import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Copyright from './components/Copyright/Copyright.jsx';
import Blog from './pages/Blog.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Hero />}/> 
          <Route path='/blog' element={<Blog />}/> 
        </Routes>
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
