import {StyledHeader, StyledH1} from './style'


export default function Header() {
  return (
    <StyledHeader>
        <div className="mobile">
        <StyledH1>Olá, Fulano</StyledH1>
        <p>Primeiro módulo (introdução ao front-end)</p>
        </div>
    </StyledHeader>
  )
}
