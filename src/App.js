import React, { Component } from "react";
import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas"
import ListaDeCategorias from "./componentes/ListaDeCategorias";
import './assets/index.css';
import "./assets/App.css";
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: [],
      categorias: [],
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

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado);
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
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}/>
          <ListaDeNotas 
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}/>
        </main>
        
      </section>
      );
  }
}

export default App;