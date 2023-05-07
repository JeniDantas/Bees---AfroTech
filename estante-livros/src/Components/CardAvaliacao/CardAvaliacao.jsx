import React from "react";
import "./CardAvaliacao.css";
import LivroAvaliado from "../../LivroAvaliado/LivroAvaliado";

function CardAvaliacao(props){
    return(
        <div className="card-avaliacao">
           <LivroAvaliado nota={props.nota} capa={require(`../assets/${props.capa}`)} />
           <div className="resenha">
            <h4>{props.titulo}</h4>
            <p>{props.resenha}</p>
           </div>
        </div>
    );
}

export default CardAvaliacao; 