import {StyledMain, StyledUl} from './style'
import {useState, useEffect} from 'react'

import ModalStyled from '../Modal'
export default function Main({user}) {
    const [open, setOpen] = useState(false);

  return (
      <StyledMain>
        <ModalStyled open={open} setOpen={setOpen}/>
        <div className="title">
            <h3>Tecnologias</h3>
            <button onClick={() => setOpen(true)}>+</button>
        </div>

        <StyledUl>
            <li onClick={() => console.log('ok')}>
                <p>react</p>
                <span>react</span>

            </li>
        </StyledUl>
    </StyledMain>
  )
}
