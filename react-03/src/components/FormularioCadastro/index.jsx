import React, { useState } from "react";
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Stack,
	TextField,
} from "@material-ui/core";
import { CpfValidator, objectAllValid, validateInput } from "../../validators";

function FormularioCadastro({ handleSubmit }) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCpf] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const [errors, setErrors] = useState({
		cpf: { valid: true, helperText: "" },
	});

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (objectAllValid(errors)) {
					handleSubmit({ nome, sobrenome, cpf, promocoes, novidades });
				}
			}}
		>
			<Stack spacing={2}>
				<TextField
					id="nome"
					label="Nome"
					variant="outlined"
					value={nome}
					onChange={(event) => {
						const tmpNome = event.target.value;
						const re = /[a-zA-Z]*/g;
						const result = validateInput(tmpNome, re);

						setNome(result);
					}}
				/>
				<TextField
					id="sobrenome"
					label="Sobrenome"
					variant="outlined"
					value={sobrenome}
					onChange={(event) => {
						const tmpSobrenome = event.target.value;
						const re = /[a-zA-Z]*/g;
						const result = validateInput(tmpSobrenome, re);

						setSobrenome(result);
					}}
				/>
				<TextField
					id="CPF"
					label="CPF"
					inputMode="decimal"
					variant="outlined"
					value={cpf}
					onChange={(event) => {
						const tmpCpf = event.target.value;
						const re = /[0-9.-]*/g;
						const result = validateInput(tmpCpf, re);

						setCpf(result);
					}}
					error={!errors.cpf.valid}
					helperText={errors.cpf.helperText}
					onBlur={(event) => {
						const verification = new CpfValidator(cpf);

						if (verification.valid) {
							setErrors({ cpf: { valid: true, helperText: "" } });
						} else {
							setErrors({
								cpf: { valid: false, helperText: "Insira um CPF válido!" },
							});
						}
					}}
				/>
			</Stack>

			<FormGroup>
				<FormControlLabel
					control={<Checkbox />}
					label="Promoções"
					checked={promocoes}
					onChange={(event) => {
						setPromocoes(event.target.checked);
					}}
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={novidades}
							onChange={(event) => {
								setNovidades(event.target.checked);
							}}
						/>
					}
					label="Novidades"
				/>
			</FormGroup>

			<Button type="submit" variant="contained">
				Cadastrar
			</Button>
		</form>
	);
}

export default FormularioCadastro;
