import React from "react";
import "./BtnResenha.css"

function BtnResenha(props){
    return(
        <div className="btn-resenha">
            <span>{props.nomeBtn}</span>
        </div>
    );
}

export default BtnResenha;