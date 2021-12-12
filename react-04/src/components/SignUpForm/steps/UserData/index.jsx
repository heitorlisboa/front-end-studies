import React, { useState } from "react";
import { Button, Stack, TextField } from "@material-ui/core";

function UserData({ handleSubmitStep }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Stack
			component="form"
			spacing={1}
			alignItems="flex-start"
			onSubmit={(event) => {
				event.preventDefault();
				handleSubmitStep({ email, password });
			}}
		>
			<TextField
				fullWidth
				id="email"
				label="E-mail"
				type="email"
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
			/>
			<TextField
				fullWidth
				id="senha"
				label="Senha"
				type="password"
				value={password}
				onChange={(event) => {
					setPassword(event.target.value);
				}}
			/>
			<Button type="submit" variant="contained">
				Próximo
			</Button>
		</Stack>
	);
}

export default UserData;
