import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/css/reset.css";
import "./assets/css/App.css";
import ArrayNotas from "./data/ArrayNotas";
import ArrayCategorias from "./data/ArrayCategorias";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.notas = new ArrayNotas();
		this.categorias = new ArrayCategorias();
	}

	render() {
		return (
			<main className="main">
				<FormularioCadastro
					categorias={this.categorias}
					criarNota={this.notas.criarNota.bind(this.notas)}
				/>
				<section className="secao-notas">
					<ListaDeCategorias
						categorias={this.categorias}
						adicionarCategoria={this.categorias.adicionarCategoria.bind(
							this.categorias
						)}
					/>
					<ListaDeNotas
						notas={this.notas}
						deletarNota={this.notas.deletarNota.bind(this.notas)}
					/>
				</section>
			</main>
		);
	}
}

export default App;
