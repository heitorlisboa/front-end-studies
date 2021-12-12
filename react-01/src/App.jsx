import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/reset.css";
import "./assets/App.css"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    this.setState(
      { notas: [...this.state.notas, novaNota] }
    )
  }

  deletarNota(index) {
    const arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    this.setState(
      { notas: arrayNotas }
    )
  }

  render() {
    return (
      <main className="main">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          deletarNota={this.deletarNota.bind(this)}
        />
      </main>
    );
  }
}

export default App;
