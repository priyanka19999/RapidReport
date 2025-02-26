
import { useState } from 'react';
import './App.css'
import {Footer} from './Components/Footer.jsx';  // ✅ Correct
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {
  const [category , setCategory] = useState("general")
  return (
    <>
    <Navbar setCategory= {setCategory} />
    <NewsBoard category = {category}/>
    <Footer />
    </>
  )
}

export default App
