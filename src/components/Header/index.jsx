import {StyledHeader, StyledH1} from './style'
import {useState} from 'react'


export default function Header({user}) {
  let module = ''
  
  if (user.course_module === '1') module = "Primeiro módulo (Introdução ao Frontend)"
  if (user.course_module === '2') module = "Segundo módulo (Frontend Avançado)"
  if (user.course_module === '3') module = "Terceiro módulo (Introdução ao Backend)"
  if (user.course_module === '4') module = "Quarto módulo (Backend Avançado)"
  return (
    <StyledHeader>
        <div className="mobile">
        <StyledH1>Olá, {user.name}</StyledH1>
        <p>{module}</p>
        </div>
    </StyledHeader>
  )
}
