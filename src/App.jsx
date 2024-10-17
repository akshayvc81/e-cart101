
import { Navigate, Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import View from './Pages/View'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import './bootstrap.min.css'






function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view/:id' element={<View/>}/>
      {/* redirect to home page */}
      <Route path="/*" element={<Navigate to={"/"}/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
