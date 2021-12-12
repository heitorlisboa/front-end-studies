import React from "react";
import "./style.css";

class ListaDeCategorias extends React.Component {
	constructor(props) {
		super(props);
		this.state = { categorias: this.props.categorias.array };

		this._handleUpdateCategorias = this._handleUpdateCategorias.bind(this);
		this._handleEventoInput = this._handleEventoInput.bind(this);
	}

	componentDidMount() {
		this.props.categorias.inscrever(this._handleUpdateCategorias);
	}

	componentWillUnmount() {
		this.props.categoria.desinscrever(this._handleUpdateCategorias)
	}

	_handleUpdateCategorias(arrayCategorias) {
		this.setState({ categorias: arrayCategorias });
	}

	_handleEventoInput(evento) {
		const teclaPressionada = evento.key;
		if (teclaPressionada === "Enter") {
			const valorCategoria = evento.target.value;
			this.props.adicionarCategoria(valorCategoria);
			evento.target.value = "";
		}
	}

	render() {
		return (
			<section className="categorias">
				<ul className="categorias__lista">
					{this.state.categorias.map((categoria, index) => {
						return (
							<li key={index} className="categorias__item">
								{categoria}
							</li>
						);
					})}
				</ul>
				<input
					type="text"
					className="categorias__input"
					placeholder="Adicionar categoria"
					onKeyUp={this._handleEventoInput}
				/>
			</section>
		);
	}
}

export default ListaDeCategorias;
