import {useState} from 'react'
import {StyledMain, StyledH1, StyledForm} from './style.js'
import {Link, useHistory} from 'react-router-dom'


import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputBase from "@mui/material/InputBase"

export default function Login() {
  const history = useHistory()

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

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

  const handleLogin = () => {
    history.push('/home')
  }

  return (
    <StyledMain>
      <StyledH1>Kenzie Hub</StyledH1>
      <StyledForm>
          <h3>Login</h3>
         
          <div className="containerInput">
          <label htmlFor="email">Email</label>
          <InputBase
           name="email"
           placeholder="Digite seu Email"
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '56px', padding: '15px', border: '1.22px solid var(--grey3)',  color: 'var(--grey0)', cursor: 'text'}}
						/* error={errors.email?.message ? true : false} */
						id="outlined-required"
						/* label={errors.email?.message ? errors.email.message : "E-mail"} */
						defaultValue=""
					/* 	{...register("email")} */
				    />

          </div>
         
        <div className="containerInput">
          
          <label htmlFor="pass">Senha</label>
          <InputBase
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
         
          
         <button className='btn' type='submit' onClick={handleLogin}>Entrar</button>
    

          <p>Ainda não possui uma conta?</p>

         <Link to='/register' className='btn register'>Cadastre-se</Link>
      </StyledForm>
    </StyledMain>
  )
}
