import React, {useContext} from "react";
import './Resenhas.css';
import Menu from '../../Components/Menu/Menu';
import CardAvaliacao from '../../Components/CardAvaliacao/CardAvaliacao';
import BtnResenha from "../../Components/BtnResenha/BtnResenha";
import ContagemContext from "../../Components/Context/ContagemContext"

function Resenhas () {
    const { contagemLido, setContagemLido,contagemVouLer,setContagemVouLer } = useContext(ContagemContext)
    function aumentarLido () {
        return  setContagemLido(contagemLido + 1)
    }
    function aumentarVouLer () {
        return  setContagemVouLer(contagemVouLer + 1)
    }
    return(
    
        <div>
            <h2>Resenhas</h2>

            <div className='principal'>
                <Menu />
                
                <div className='principal'>
                    <CardAvaliacao titulo="Titulo da Resenha" nota="5" capa="livro1.jpg" resenha="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
                
                </div>
            </div>

            <div className='principal'>
                <button className="btn-resenha" onClick={aumentarLido} >Marcar como lido</button>
                <button className="btn-resenha" onClick={aumentarVouLer} >Vou ler</button>
            </div>
        </div>
    )

}

export default Resenhas;