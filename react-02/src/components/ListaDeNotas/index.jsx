import React from "react";
import "./style.css";
import CardNota from "../CardNota";

class ListaDeNotas extends React.Component {
	constructor(props) {
		super(props);

		this.state = { notas: this.props.notas.array };

		this._handleUpdateNotas = this._handleUpdateNotas.bind(this);
	}

	componentDidMount() {
		this.props.notas.inscrever(this._handleUpdateNotas);
	}

	componentWillUnmount() {
		this.props.notas.desinscrever(this._handleUpdateNotas);
	}

	_handleUpdateNotas(arrayNotas) {
		this.setState({ notas: arrayNotas });
	}

	render() {
		return (
			<ul className="lista-notas">
				{this.state.notas.map((nota, index) => {
					return (
						<li key={index} className="lista-notas__item">
							<CardNota
								index={index}
								nota={nota}
								deletarNota={this.props.deletarNota}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;
