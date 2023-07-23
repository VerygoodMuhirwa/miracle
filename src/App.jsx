
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Login from './pages/Login'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/login' element={<Login title="Log in"/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
