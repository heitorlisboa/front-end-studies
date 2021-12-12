import React from 'react';
import "./style.css"
import CardNota from '../CardNota';

class ListaDeNotas extends React.Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas__item">
              <CardNota
                index={index}
                nota={nota}
                deletarNota={this.props.deletarNota}
              />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
