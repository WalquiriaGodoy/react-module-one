import React, { Component } from "react";
import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas"
import './assets/index.css';
import "./assets/App.css";
class App extends Component {

  

  render(){
    return(
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
      );
  }
}

export default App;