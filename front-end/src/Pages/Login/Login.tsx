import LoginForm from '../../Components/LoginForm/LoginForm'
import './Login.css'

function Login() {
  return (
    <main id='login-page'>
      <div id='login-hero'>
        <div id='gradient'>
        </div>
      </div>
      <div id='form-container'>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login
