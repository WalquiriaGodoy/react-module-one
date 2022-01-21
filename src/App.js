import React, { Component } from "react";
import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas"
import './assets/index.css';
import "./assets/App.css";
class App extends Component {

  constructor(){
    super();
    this.state = {
      noticias: []
    }
  }

  renderizaNovaNoticia(titulo, texto){
    const novaNoticia = {titulo, texto}
    const novoArrayNoticias = [...this.state.noticias, novaNoticia];
    const novoEstado = {
      noticias: novoArrayNoticias
    }
    this.setState(novoEstado)
  }

  render(){
    return(
      <section className="conteudo">
        <FormularioCadastro renderizaNovaNoticia={this.renderizaNovaNoticia.bind(this)}/>
        <ListaDeNotas noticias={this.state.noticias}/>
      </section>
      );
  }
}

export default App;