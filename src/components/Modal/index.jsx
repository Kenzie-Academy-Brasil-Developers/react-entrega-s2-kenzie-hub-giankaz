import {useState, useEffect} from 'react'

import Modal from '@mui/material/Modal';
import {Box, Form} from './style.js'
import InputBase from "@mui/material/InputBase"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ModalStyled({open, setOpen}) {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Modal
        open={open}
       /*  onClose={handleClose} */
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
         <Box>
             <div className="modal-title">
            <h1>Cadastrar Tecnologia</h1>
                    <button onClick={handleClose}>X</button>
             </div>

             <Form>
             <div className="containerInput">
          <label htmlFor="tech">Nome</label>
          <InputBase
           name="tech"
           placeholder="Tecnologia"
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '56px', padding: '15px', border: '1.22px solid var(--grey3)',  color: 'var(--grey0)', cursor: 'text'}}
						id="outlined-required"
						defaultValue=""
					 
				    />

          </div>
          <div className="containerInput">
          <label htmlFor="modulo">Selecionar status</label>
            <Select
            sx={{backgroundColor: 'var(--grey2)', width: '90%', borderRadius: '8px', height: '48px', color: 'var(--grey0)'}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={1}
              label="Age"
             >
                <MenuItem value={1}>Iniciante</MenuItem>
                <MenuItem value={2}>Intermediário</MenuItem>
                <MenuItem value={3}>Avançado</MenuItem>
        </Select>
            </div>
            <button type="submit" className="btn">Cadastrar Tecnologia</button>
             </Form>
         </Box>

   

  </Modal>
  )
}
