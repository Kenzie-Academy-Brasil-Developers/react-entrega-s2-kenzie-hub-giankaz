import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import Modal from "@mui/material/Modal";
import { Box, Form } from "./style.js";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Api } from "../API";

export default function ModalStyled({
	open,
	setOpen,
	h1,
	setUpdate,
	update,
	item,
  check,
  setErr,
  setSuc
}) {
	const [title, setTitle] = useState("");
	const [status, setStatus] = useState("");

	useEffect(() => {
		if (item.title) {
			setTitle(item.title);
		} else {
			setTitle("");
		}

		if (item.status) {
			setStatus(item.status);
		} else {
			setStatus("Iniciante");
		}
	}, [open]);

	const token = JSON.parse(window.localStorage.getItem("@Khub:token"));

	const handleClose = () => setOpen(false);

	const handleChange = (type) => (event) => {
		if (type) {
			setTitle(event.target.value);
		} else {
			setStatus(event.target.value);
		}
	};

	const schema = yup.object().shape({
    tech: yup.string(),
    status: yup.string(),
  });

 
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  

	const submit = ({ tech, status }) => {

		if (check) {
			Api.put(
				`users/techs/${item.id}`,
				{
					status: status,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
      .then((res) => {
        setSuc(true)
				setUpdate(!update);
				handleClose();
			})
      .catch((error) => {
        setErr(true)
      })

		} else {
			Api.post(
				"users/techs",
				{
					title: tech,
					status: status,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
				.then((res) => {
          setSuc(true)
          setUpdate(!update);
          setStatus("Iniciante");
          setTitle("");
          handleClose();
				})
				.catch((err) => {
          setErr(true)
				});
		}
	};

	const handleDelete = () => {
		Api.delete(`users/techs/${item.id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
        setSuc(true)
				setUpdate(!update);
				handleClose();
			})
			.catch((err) => {
        console.log(`🤖 ~ handleDelete ~ err`, err)
        setErr(true)
      })
	}
	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
      
			<Box>

				<div className="modal-title">
					<h1>{h1}</h1>
					<button onClick={handleClose}>X</button>
				</div>
				<Form  onSubmit={handleSubmit(submit)}>
					<div className="containerInput">
						<label htmlFor="tech">Nome</label>
						<InputBase
							{...register("tech")}
							name="tech"
							disabled={check ? true : false}
							placeholder="Tecnologia"
							value={title}
							onChange={handleChange(true)}
							sx={{
								backgroundColor: "var(--grey2)",
								width: "90%",
								borderRadius: "8px",
								height: "56px",
								padding: "15px",
								border: "1.22px solid var(--grey3)",
								color: "var(--grey0)",
								cursor: "text",
							}}
							id="outlined-required"
						/>
					</div>
					<div className="containerInput">
						<label htmlFor="modulo">Selecionar status</label>
						<Select
							{...register("status")}
							sx={{
								backgroundColor: "var(--grey2)",
								width: "90%",
								borderRadius: "8px",
								height: "48px",
								color: "var(--grey0)",
							}}
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={status}
							onChange={handleChange(false)}
							label="status"
						>
							<MenuItem value={"Iniciante"}>Iniciante</MenuItem>
							<MenuItem value={"Intermediário"}>Intermediário</MenuItem>
							<MenuItem value={"Avançado"}>Avançado</MenuItem>
						</Select>
					</div>
					<div className="containerBtn">
						{check ? 	<button type="submit" className="btn">Salvar alterações</button> : <button type="submit" className="btn">Cadastrar Tecnologia</button>}
						{check && (
							<button type="button" className="btn del" onClick={handleDelete}>
								Excluir
							</button>
						)}
					</div>
				</Form>
			</Box>
  
		</Modal>
	);
}
