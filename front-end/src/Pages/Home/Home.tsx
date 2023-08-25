import secureLocalStorage from 'react-secure-storage'
import './Home.css'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'

function Home() {
  const { setUser } = useContext(UserContext)

  const logout = () => {
    secureLocalStorage.removeItem('etoken')

    setUser(undefined)
  }

  return (
    <main id='home-page'>
      <button onClick={logout} id='logout-button'>SAIR</button>
    </main>
  )
}

export default Home
