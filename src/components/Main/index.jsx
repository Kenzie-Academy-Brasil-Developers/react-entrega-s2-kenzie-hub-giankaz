import {StyledMain, StyledUl} from './style'
import {useState, useEffect} from 'react'
import {Api} from '../API'

import { ToastContainer, toast } from "react-toastify";

import ModalStyled from '../Modal'

export default function Main() {
    const [openPost, setOpenPost] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [list, setList] = useState([])
    const [update, setUpdate] = useState(false)
    const [item, setItem] = useState('')
    const [err, setErr] = useState(false)
    const [suc, setSuc] = useState(false)

    const id = JSON.parse(window.localStorage.getItem('@Khub:user'))
    
    useEffect(() => {
      console.log('here')
      Api.get(`users/${id}`)
      .then((res) => {
        const techs = res.data.techs
        setList(techs)
      })
      .catch((err) => console.error(err))

    }, [update])

    useEffect(() => {
      if (suc === true) {
        toast.success('Operação concluída com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
          setSuc(false)
   
      } 
     
    } ,[suc])

    useEffect(() => {
      if (err === true) {
        toast.error('Ops! Algo deu errado.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
          setErr(false)
      }
    }, [err])

  return (
      <StyledMain>
        <ModalStyled open={openPost} setOpen={setOpenPost} h1='Cadastrar Tecnologia' setUpdate={setUpdate} update={update} item={item} setErr={setErr} setSuc={setSuc}/>
        <ModalStyled open={openEdit} setOpen={setOpenEdit} h1='Editar Tecnologia' setUpdate={setUpdate} check={true} update={update} item={item} setErr={setErr} setSuc={setSuc}/>
        <div className="title">
            <h3>Tecnologias</h3>
            <button onClick={() => {
              setOpenPost(true)
              setItem('')
              }}>+</button>
        </div>

        <StyledUl>
          {list && list.map(({id, status, title}) => {
  
            return (
              <li key={id} onClick={() => {
                setOpenEdit(true)
                setItem({id: id, status: status, title: title})
                }}>
              <p>{title}</p>
              <span>{status}</span>
             </li>
            )
          })}
       
        </StyledUl>
        <ToastContainer
                sx={{backgroundColor: 'var(--grey2)', width: '10px'}}
                position="top-right"
                autoClose={5000}
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
