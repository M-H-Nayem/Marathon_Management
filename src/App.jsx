
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Navbar/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>    
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

export default App
