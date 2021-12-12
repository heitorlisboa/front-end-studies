import React from "react";
import "./style.css";

class FormularioCadastro extends React.Component {
	constructor(props) {
		super(props);
		this.titulo = "";
		this.categoria = this.props.categorias.array[0];
		this.texto = "";

		this.state = { categorias: this.props.categorias.array };

		this._handleUpdateCategorias = this._handleUpdateCategorias.bind(this);
		this._handleMudancaTitulo = this._handleMudancaTitulo.bind(this);
		this._handleMudancaCategoria = this._handleMudancaCategoria.bind(this);
		this._handleMudancaTexto = this._handleMudancaTexto.bind(this);
		this._criarNota = this._criarNota.bind(this);
	}

	componentDidMount() {
		this.props.categorias.inscrever(this._handleUpdateCategorias);
	}

	componentWillUnmount() {
		this.props.categoria.desinscrever(this._handleUpdateCategorias);
	}

	_handleUpdateCategorias(arrayCategorias) {
		this.setState({ categorias: arrayCategorias });
	}

	_handleMudancaTitulo(evento) {
		this.titulo = evento.target.value;
	}

	_handleMudancaCategoria(evento) {
		this.categoria = evento.target.value;
	}

	_handleMudancaTexto(evento) {
		this.texto = evento.target.value;
	}

	_criarNota(evento) {
		evento.preventDefault();
		this.props.criarNota(this.titulo, this.categoria, this.texto);
	}

	render() {
		return (
			<form className="formulario-cadastro" onSubmit={this._criarNota}>
				<input
					type="text"
					placeholder="Título"
					className="formulario-cadastro__input"
					onChange={this._handleMudancaTitulo}
				/>
				<select
					className="formulario-cadastro__select"
					onChange={this._handleMudancaCategoria}
				>
					{this.props.categorias.array.map((categoria, index) => {
						return (
							<option key={index} value={categoria}>
								{categoria}
							</option>
						);
					})}
				</select>
				<textarea
					placeholder="Escreva sua nota..."
					className="formulario-cadastro__input"
					onChange={this._handleMudancaTexto}
				/>
				<button type="submit" className="formulario-cadastro__btn">
					Criar Nota
				</button>
			</form>
		);
	}
}

export default FormularioCadastro;
