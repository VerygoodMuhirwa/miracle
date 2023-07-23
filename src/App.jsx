
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Landing from './pages/Landing'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signUp' element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
