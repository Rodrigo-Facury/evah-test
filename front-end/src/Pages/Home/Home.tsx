import secureLocalStorage from 'react-secure-storage'
import './Home.css'

function Home() {
  const logout = () => {
    secureLocalStorage.removeItem('etoken')
    // TODO: setar user como null
  }

  return (
    <main id='home-page'>
      <button onClick={logout} id='logout-button'>SAIR</button>
    </main>
  )
}

export default Home
