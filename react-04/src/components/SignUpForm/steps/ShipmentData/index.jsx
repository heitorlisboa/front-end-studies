import React, { useState } from "react";
import { Button, Stack, TextField } from "@material-ui/core";
import { validateInput } from "../../../../validators";

function ShipmentData({ handleSubmitStep, finishSignUp }) {
	const [cep, setCep] = useState("");
	const [estado, setEstado] = useState("");
	const [cidade, setCidade] = useState("");
	const [endereco, setEndereco] = useState("");

	return (
		<Stack
			component="form"
			spacing={1}
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmitStep({ cep, estado, cidade, endereco });
				finishSignUp();
			}}
		>
			<TextField
				fullWidth
				id="cep"
				label="CEP"
				value={cep}
				onChange={(event) => {
					const tmpCep = event.target.value;
					const regex = /[0-9-]*/g;
					const result = validateInput(tmpCep, regex);

					setCep(result);
				}}
			/>
			<Stack spacing={1} direction="row" justifyContent="space-between">
				<TextField
					fullWidth
					id="estado"
					label="Estado"
					value={estado}
					onChange={(event) => {
						const tmpEstado = event.target.value;
						const regex = /[a-zA-Z]*/g;
						const result = validateInput(tmpEstado, regex);

						setEstado(result);
					}}
				/>
				<TextField
					fullWidth
					id="cidade"
					label="Cidade"
					value={cidade}
					onChange={(event) => {
						const tmpCidade = event.target.value;
						const regex = /[a-zA-Z]*/g;
						const result = validateInput(tmpCidade, regex);

						setCidade(result);
					}}
				/>
			</Stack>
			<TextField
				fullWidth
				id="endereco"
				label="Endereço"
				value={endereco}
				onChange={(event) => {
					const tmpEndereco = event.target.value;
					const regex = /[a-zA-Z]*/g;
					const result = validateInput(tmpEndereco, regex);

					setEndereco(result);
				}}
			/>
			<Button type="submit" variant="contained" fullWidth>
				Finalizar cadastro
			</Button>
		</Stack>
	);
}

export default ShipmentData;
