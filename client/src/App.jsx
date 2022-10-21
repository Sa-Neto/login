import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

//Hooks
import { useAuth } from './hooks/useAuth'

//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  const { auth } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to='/' />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
