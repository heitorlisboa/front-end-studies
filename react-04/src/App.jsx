import React from "react";
import "./App.css";
import { Container, Typography } from "@material-ui/core";
import SignUpForm from "./components/SignUpForm";

function App() {
	return (
		<Container maxWidth="sm" component="article">
			<Typography variant="h4" component="h1" gutterBottom>
				Formulário de cadastro
			</Typography>
			<SignUpForm handleSubmitForm={handleSubmitForm} />
		</Container>
	);
}

function handleSubmitForm(data) {
	console.log(data);
}

export default App;
