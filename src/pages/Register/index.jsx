import { StyledMain, StyledH1, StyledForm } from "./style";

import { useHistory } from "react-router-dom";

import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Api } from "../../components/API/index.jsx";

import { ToastContainer, toast } from "react-toastify";

export default function Register() {
	const history = useHistory();

	const [values, setValues] = useState({
		password: "",
		showPassword: false,
		confirm: "",
		showConfirm: false,
	});

	const schema = yup.object().shape({
		name: yup
			.string()
			.required("Digite seu nome!")
			.min(3, "Digite um nome com mais de 03 letras!")
			.max(25, "Máximo de 25 Caracteres")
			.matches(/^[aA-zZ\s]+$/, "Deve conter apenas letras!"),
		email: yup
			.string()
			.required("Digite seu Email!")
			.email("Email não é válido"),
		password: yup
			.string()
			.required("Digite sua Senha!")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				"Deve conter 08 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial(!,@,#,$,%,&...)"
			),
		confirm: yup
			.string()
			.required("Confirme sua senha!")
			.oneOf([yup.ref("password")], "As senhas não são iguais!"),
		module: yup.string().required("Selecione seu módulo"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submit = ({ name, email, password, module }) => {
		Api.post("users", {
			email: email,
			password: password,
			name: name,
			bio: "Olá!",
			contact: "Digite aqui seu Contato",
			course_module: `${module}`,
		})
			.then((res) => {
				toast.success("Conta criada com sucesso!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setTimeout(() => history.push("/"), 3000);
			})

			.catch((err) => {
				toast.error("Ops! Algo deu errado.", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleClickShowConfirm = () => {
		setValues({
			...values,
			showConfirm: !values.showConfirm,
		});
	};

	const handleMouseDownConfirm = (event) => {
		event.preventDefault();
	};

	const handleGoBack = () => {
		history.push("/");
	};
	return (
		<StyledMain>
			<div className="title">
				<StyledH1>Kenzie Hub</StyledH1>
				<button className="back" onClick={handleGoBack}>
					Voltar
				</button>
			</div>

			<StyledForm onSubmit={handleSubmit(submit)}>
				<h3>Crie sua conta</h3>
				<p>Rápido e grátis, vamos nessa</p>

				<div className="containerInput">
					<label htmlFor="name">
						Nome{" "}
						{errors.name?.message && (
							<span className="error">- {errors.name.message}</span>
						)}
					</label>
					<InputBase
						name="name"
						placeholder="Digite aqui seu Nome"
						sx={{
							backgroundColor: "var(--grey2)",
							width: "90%",
							borderRadius: "8px",
							height: "48px",
							padding: "15px",
							color: "var(--grey0)",
							cursor: "text",
						}}
						id="outlined-required"
						defaultValue=""
						{...register("name")}
					/>
				</div>
				<div className="containerInput">
					<label htmlFor="email">
						Email{" "}
						{errors.email?.message && (
							<span className="error">- {errors.email.message}</span>
						)}
					</label>
					<InputBase
						type="email"
						name="email"
						placeholder="Digite aqui seu Email"
						sx={{
							backgroundColor: "var(--grey2)",
							width: "90%",
							borderRadius: "8px",
							height: "48px",
							padding: "15px",
							color: "var(--grey0)",
							cursor: "text",
						}}
						id="outlined-required"
						defaultValue=""
						{...register("email")}
					/>
				</div>

				<div className="containerInput">
					<label htmlFor="password">
						Senha{" "}
						{errors.password?.message && (
							<span className="error">- {errors.password.message}</span>
						)}
					</label>
					<InputBase
						{...register("password")}
						sx={{
							backgroundColor: "var(--grey2)",
							width: "90%",
							borderRadius: "8px",
							height: "48px",
							padding: "15px",
							color: "var(--grey0)",
							cursor: "text",
						}}
						name="password"
						placeholder="Digite aqui sua senha"
						id="outlined-adornment-password"
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						onChange={handleChange("password")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									sx={{ color: "var(--grey0)" }}
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
					<label htmlFor="confirm">
						Confirmar senha{" "}
						{errors.confirm?.message && (
							<span className="error">- {errors.confirm.message}</span>
						)}
					</label>
					<InputBase
						{...register("confirm")}
						sx={{
							backgroundColor: "var(--grey2)",
							width: "90%",
							borderRadius: "8px",
							height: "48px",
							padding: "15px",
							color: "var(--grey0)",
							cursor: "text",
						}}
						name="confirm"
						placeholder="Digite novamente sua senha"
						id="outlined-adornment-password"
						type={values.showConfirm ? "text" : "password"}
						value={values.confirm}
						onChange={handleChange("confirm")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									sx={{ color: "var(--grey0)" }}
									aria-label="toggle password visibility"
									onClick={handleClickShowConfirm}
									onMouseDown={handleMouseDownConfirm}
									edge="end"
								>
									{values.showConfirm ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</div>

				<div className="containerInput">
					<label htmlFor="modulo">Selecionar módulo</label>
					<Select
						sx={{
							backgroundColor: "var(--grey2)",
							width: "90%",
							borderRadius: "8px",
							height: "48px",
							color: "var(--grey0)",
						}}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						defaultValue={1}
						label="Age"
						onChange={handleChange}
						{...register("module")}
					>
						<MenuItem value={1}>Primeiro Módulo</MenuItem>
						<MenuItem value={2}>Segundo Módulo</MenuItem>
						<MenuItem value={3}>Terceiro Módulo</MenuItem>
						<MenuItem value={4}>Quarto Módulo</MenuItem>
					</Select>
				</div>

				<button className="btn" type="submit">
					Cadastrar
				</button>
			</StyledForm>
			<ToastContainer
				sx={{ backgroundColor: "var(--grey2)" }}
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
	);
}
