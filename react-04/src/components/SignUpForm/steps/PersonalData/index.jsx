import React, { useState } from "react";
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Stack,
	TextField,
} from "@material-ui/core";
import {
	CpfValidator,
	objectAllValid,
	validateInput,
} from "../../../../validators";

function SignUpForm({ handleSubmitStep }) {
	const [nome, setNome] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [cpf, setCpf] = useState("");
	const [promocoes, setPromocoes] = useState(true);
	const [novidades, setNovidades] = useState(true);
	const [errors, setErrors] = useState({
		cpf: { valid: true, helperText: "" },
	});

	return (
		<Stack
			spacing={1}
			alignItems="flex-start"
			component="form"
			onSubmit={(event) => {
				event.preventDefault();
				if (objectAllValid(errors)) {
					handleSubmitStep({ nome, sobrenome, cpf, promocoes, novidades });
				}
			}}
		>
			<TextField
				fullWidth
				id="nome"
				label="Nome"
				value={nome}
				onChange={(event) => {
					const tmpNome = event.target.value;
					const regex = /[a-zA-Z]*/g;
					const result = validateInput(tmpNome, regex);

					setNome(result);
				}}
			/>
			<TextField
				fullWidth
				id="sobrenome"
				label="Sobrenome"
				value={sobrenome}
				onChange={(event) => {
					const tmpSobrenome = event.target.value;
					const regex = /[a-zA-Z]*/g;
					const result = validateInput(tmpSobrenome, regex);

					setSobrenome(result);
				}}
			/>
			<TextField
			fullWidth
				id="CPF"
				label="CPF"
				inputMode="decimal"
				value={cpf}
				onChange={(event) => {
					const tmpCpf = event.target.value;
					const regex = /[0-9.-]*/g;
					const result = validateInput(tmpCpf, regex);

					setCpf(result);
				}}
				error={!errors.cpf.valid}
				helperText={errors.cpf.helperText}
				onBlur={() => {
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
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							checked={promocoes}
							onChange={(event) => {
								setPromocoes(event.target.checked);
							}}
						/>
					}
					label="Promoções"
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
				Próximo
			</Button>
		</Stack>
	);
}

export default SignUpForm;
