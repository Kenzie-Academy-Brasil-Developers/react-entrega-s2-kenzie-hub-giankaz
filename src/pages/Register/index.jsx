import {StyledMain, StyledH1, StyledForm} from './style'
import {useHistory} from 'react-router-dom'

import {useState} from 'react'

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputBase from "@mui/material/InputBase"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Register() {
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

  const handleRegister = () => {
    history.push('/')
  }
  const handleGoBack = () => {
    history.push('/')
  }
  return (
    <StyledMain>
      <div className="title">
      <StyledH1>Kenzie Hub</StyledH1>
      <button className="back" onClick={handleGoBack}>Voltar</button>
      </div>

      <StyledForm>
        <h3>Crie sua conta</h3>
        <p>Rápido e grátis, vamos nessa</p>

        <div className="containerInput">
          <label htmlFor="email">Nome</label>
          <InputBase
           name='name'
           placeholder="Digite aqui seu Nome"
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '48px', padding: '15px',  color: 'var(--grey0)', cursor: 'text'}}
						/* error={errors.email?.message ? true : false} */
						id="outlined-required"
						/* label={errors.email?.message ? errors.email.message : "E-mail"} */
						defaultValue=""
					/* 	{...register("email")} */
				    />

          </div>
          <div className="containerInput">
          <label htmlFor="name">Email</label>
          <InputBase
           type="email"
          name='email'
           placeholder="Digite aqui seu Email"
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '48px', padding: '15px',  color: 'var(--grey0)', cursor: 'text'}}
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
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '48px', padding: '15px', color: 'var(--grey0)', cursor: 'text'}}
            name='pass'
            placeholder="Digite aqui sua senha"
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
        <div className="containerInput">
          
          <label htmlFor="pass">Confirmar senha</label>
          <InputBase
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '48px', padding: '15px', color: 'var(--grey0)', cursor: 'text'}}
            name='pass'
            placeholder="Digite novamente sua senha"
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

            <div className="containerInput">
          <label htmlFor="modulo">Selecionar módulo</label>
            <Select
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '48px', color: 'var(--grey0)'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={1}
              label="Age"
              onChange={handleChange}
          
             >
                <MenuItem value={1}>Primeiro Módulo</MenuItem>
                <MenuItem value={2}>Segundo Módulo</MenuItem>
                <MenuItem value={3}>Terceiro Módulo</MenuItem>
                <MenuItem value={4}>Quarto Módulo</MenuItem>
        </Select>
            </div>

            <button className='btn' type='submit' onClick={handleRegister}>Cadastrar</button>

      </StyledForm>
    </StyledMain>
  )
}
