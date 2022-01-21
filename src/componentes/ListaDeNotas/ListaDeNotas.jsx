import React, { Component } from "react";
import CardNota from "../CardNota/CardNota.jsx";
import "./estilo.css"

class ListaDeNotas extends Component{

    render(){
        return(
            <ul className="lista-notas">
                {this.props.noticias.map((noticia, index) => {
                    return(
                        <li className="lista-notas_item" key={index}>
                            <CardNota titulo={noticia.titulo} texto={noticia.texto}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;