import React from 'react';
import "./style.css"
import deleteSVG from "../../assets/img/delete.svg"

class CardNota extends React.Component {

  _deletarNota() {
    const index = this.props.index
    this.props.deletarNota(index)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota__header">
          <h3 className="card-nota__titulo">{this.props.nota.titulo}</h3>
        </header>
        <div>
          <p className="card-nota__conteudo">{this.props.nota.texto}</p>
        </div>
        <img
          src={deleteSVG}
          alt="Ícone de lixeira"
          className="card-nota__btn-deletar"
          onClick={this._deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default CardNota;