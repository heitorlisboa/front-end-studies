import React from 'react'
import "./style.css"

class FormularioCadastro extends React.Component {

  constructor(props) {
    super(props)
    this.titulo = ""
    this.categoria = ""
    this.texto = ""
  }

  _criarNota(evento) {
    evento.preventDefault()
    this.props.criarNota(this.titulo, this.texto)
  }

  _handleMudancaTitulo(evento) {
    this.titulo = evento.target.value
  }

  _handleMudancaTexto(evento) {
    this.texto = evento.target.value
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="formulario-cadastro__input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="formulario-cadastro__input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button type="submit" className="formulario-cadastro__btn">Criar Nota</button>
      </form>
    )
  }
}

export default FormularioCadastro;