import { useNavigate } from 'react-router-dom'
import './LoginForm.css'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useContext, useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import axios from 'axios'
import UserContext from '../../contexts/UserContext'
import jwtDecode from 'jwt-decode'
import { TokenInfo } from '../../../types'

interface IFormInputs {
  email: string
  password: string
}

interface IErrors {
  email?: {
    type?: string
  }
  password?: {
    type?: string
  }
}

function LoginForm() {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState<IFormInputs>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<IErrors>({})

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!loginInfo.email) {
      setErrors((prev) => ({ ...prev, email: { type: 'required' } }))

      return;
    }

    const validEmail = emailRegex.test(loginInfo.email)

    if (!validEmail) {
      setErrors((prev) => ({ ...prev, email: { type: 'pattern' } }))

      return;
    }

    if (!loginInfo.password) {
      setErrors((prev) => ({ ...prev, password: { type: 'required' } }))

      return;
    }

    axios.post('http://localhost:3001/user/login', loginInfo)
      .then(({ data }: { data: { token: string } }) => {
        secureLocalStorage.setItem('etoken', data.token)
        const tokenInfo: TokenInfo = jwtDecode(data.token)
        setUser(tokenInfo)
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))

    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <form id='login-form'>
      <h1 id='greeting'>Olá, seja <br /> bem-vindo!</h1>
      <h3 id='instructions'>Para acessar a plataforma, faça seu login.</h3>
      <div className='input-container'>
        <label htmlFor='email'>E-MAIL</label>
        <InputGroup>
          <Input
            id='email'
            name='email'
            aria-invalid={errors.email ? 'true' : 'false'}
            className={errors.email ? 'input error' : 'input'}
            placeholder='user.name@mail.com'
            onChange={handleChange}
            onKeyUp={handleKeyPress}
          />
          <InputRightElement>
            <CloseIcon
              position='relative'
              top='4px'
              right='5px'
              visibility={errors.email ? 'visible' : 'hidden'}
              color='rgba(255, 55, 127, 1)'
              boxSize='9.33px'
            />
          </InputRightElement>
        </InputGroup>
        {errors.email?.type === 'required' && <p className='error-message'>E-mail é um campo obrigatório</p>}
        {errors.email?.type === 'pattern' && <p className='error-message'>Digite um e-mail válido</p>}
      </div>
      <div className='input-container'>
        <label htmlFor='password'>SENHA</label>
        <InputGroup>
          <Input
            id='password'
            type='password'
            name='password'
            aria-invalid={errors.password ? 'true' : 'false'}
            className={errors.password ? 'input error' : 'input'}
            placeholder='*******'
            onChange={handleChange}
            onKeyUp={handleKeyPress}
          />
          <InputRightElement>
            <CloseIcon
              position='relative'
              top='4px'
              right='5px'
              visibility={errors.password ? 'visible' : 'hidden'}
              color='rgba(255, 55, 127, 1)'
              boxSize='9.33px'
            />
          </InputRightElement>
        </InputGroup>
        {errors.password && <p className='error-message'>Senha é um campo obrigatório</p>}
      </div>
      <button type='button' id='login-button' onClick={handleSubmit}>
        ENTRAR
      </button>

      <p id='forgot-password'>
        Esqueceu seu login ou senha?
        <br />
        Clique <span id='here' onClick={() => navigate('/recover-password')}>aqui</span>
      </p>
    </form>
  )
}

export default LoginForm
