import {useState} from 'react'
import {StyledMain, StyledH1, StyledForm} from './style.js'
import {Link, useHistory} from 'react-router-dom'

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputBase from "@mui/material/InputBase"

import {Api} from '../../components/API/index.jsx'

import { ToastContainer, toast } from 'react-toastify';

export default function Login({setToken}) {
  const history = useHistory()

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })



  const schema = yup.object().shape({
    email: yup.string().required('Digite seu Email!').email('Email não é válido'),
    password: yup.string().required('Digite sua Senha!').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
     "Deve conter 08 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial(!,@,#,$,%,&...)"
    )
})

const {
register,
handleSubmit,
formState: { errors },
} = useForm({
    resolver: yupResolver(schema)
});


const submit = ({email, password}) => {


    Api.post('sessions', {
      "email": email,
      "password": password,
      })
    .then((res) => {
      toast.success('Login realizado com sucesso, aguarde...!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
         setTimeout(() => {
           const token = res.data.token
           const id = res.data.user.id
           setToken(token)
           window.localStorage.setItem('@Khub:token', JSON.stringify(token))
           window.localStorage.setItem('@Khub:user', JSON.stringify(id))
          history.push('/home')
          },3000) 
    })
    .catch((err) => {
      toast.error('Ops! Algo deu errado.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    })
   
}
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  };


  return (
    <StyledMain>
      <StyledH1>Kenzie Hub</StyledH1>
      <StyledForm onSubmit={handleSubmit(submit)}>
          <h3>Login</h3>
         
          <div className="containerInput">
          <label htmlFor="email">Email {errors.email?.message && <span className="error">- {errors.email.message}</span>}</label>
          <InputBase
           name="email"
           placeholder="Digite seu Email"
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '56px', padding: '15px', border: '1.22px solid var(--grey3)',  color: 'var(--grey0)', cursor: 'text'}}
						id="outlined-required"
						defaultValue=""
						{...register("email")} 
				    />

          </div>
         
        <div className="containerInput">
          
          <label htmlFor="pass">Senha {errors.pass?.message && <span className="error">- {errors.pass.message}</span>}</label>
          <InputBase
            {...register('password')}
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '56px', padding: '15px', border: '1.22px solid var(--grey3)', color: 'var(--grey0)', cursor: 'text'}}
            name='password'
            placeholder="Digite sua senha"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                sx={{color: 'var(--grey0)'}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />
        
        </div>
         
          
         <button className='btn' type='submit'>Entrar</button>
    

          <p>Ainda não possui uma conta?</p>

         <Link to='/register' className='btn register'>Cadastre-se</Link>
      </StyledForm>
      <ToastContainer
                sx={{backgroundColor: 'var(--grey2)'}}
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
        />
    </StyledMain>
  )
}
