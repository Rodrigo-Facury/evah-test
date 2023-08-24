import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import secureLocalStorage from 'react-secure-storage'
import { useEffect, useState } from 'react'
import { TokenInfo } from '../types'
import jwtDecode from 'jwt-decode'
import UserContext from './contexts/UserContext'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'


function App() {
  const [user, setUser] = useState<TokenInfo | null>()
  const token = secureLocalStorage.getItem('etoken')

  useEffect(() => {
    if (token && typeof token === 'string') {
      const tokenInfo: TokenInfo = jwtDecode(token)

      if (tokenInfo.exp && tokenInfo.exp * 1000 < Date.now() && document.location.pathname !== '/login') {
        document.location.replace('/login')
        secureLocalStorage.removeItem('etoken')
      }

      setUser(tokenInfo)
    } else if (document.location.pathname !== '/login') {
      document.location.replace('/login')
    }
  }, [token, user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
