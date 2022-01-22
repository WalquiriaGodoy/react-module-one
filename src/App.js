import React, { Component } from "react";
import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas"
import './assets/index.css';
import "./assets/App.css";
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    }
  }

  criaNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas})
  }

  render(){
    return(
      <section className="conteudo">
        <FormularioCadastro criaNota={this.criaNota.bind(this)}/>
        <ListaDeNotas 
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </section>
      );
  }
}

export default App;