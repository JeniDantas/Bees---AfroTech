import React from "react";
import "./Header.css"

function Header(){
    return(
        <header>
            <img className="foto-perfil" src="https://img.elo7.com.br/product/zoom/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg" alt="" />
            <span className="nome-usuario">Luana Lucia</span>
            <div className="lidos">
                <span>160</span>
                <span>lidos</span>
            </div>
            <div className="vou-ler">
                <span>30</span>
                <span>vou ler</span>
            </div>
        </header>
    );
}

export default Header;