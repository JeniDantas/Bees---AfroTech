import React from "react";
import "./Estante.css";
import LivroAvaliado from "../../LivroAvaliado/LivroAvaliado";
import logo from "../../logo.svg";

function Estante(){
    return(
        <div className="estante">
            <LivroAvaliado nota="3" capa={logo}/>
            <LivroAvaliado nota="4" capa={logo}/>
            <LivroAvaliado nota="5" capa={logo}/>
            <LivroAvaliado nota="2" capa={logo}/>
            <LivroAvaliado nota="4" capa={logo}/>
            <LivroAvaliado nota="5" capa={logo}/>
        </div>
    );
}

export default Estante;