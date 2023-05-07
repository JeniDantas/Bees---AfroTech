import React,{useContext} from "react";
import "./Header.css"
import jeni from "../assets/jeni.jpg";
import ContagemContext from "../Context/ContagemContext";

function Header(){
    const { contagemLido, contagemVouLer } = useContext(ContagemContext)
    return(
        <header>
            <img className="foto-perfil" src={jeni} alt="" />
            <span className="nome-usuario">Jeni Dantas</span>
            <div className="lidos">
                <span>{contagemLido}</span>
                <span>lidos</span>
            </div>
            <div className="vou-ler">
                <span>{contagemVouLer}</span>
                <span>vou ler</span>
                
            </div>
        
        </header>
    );
}

export default Header;