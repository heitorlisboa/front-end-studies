import React from "react";
import "./App.css";
import { Container, Typography } from "@material-ui/core";
import FormularioCadastro from "./components/FormularioCadastro";

function App() {
	return (
		<Container maxWidth="sm" component="article">
			<Typography variant="h4" component="h1" gutterBottom>
				Formulário de cadastro
			</Typography>
			<FormularioCadastro handleSubmit={handleSubmitForm} />
		</Container>
	);
}

function handleSubmitForm(dados) {
	console.log(dados);
}

export default App;
