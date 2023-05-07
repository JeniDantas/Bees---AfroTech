import React from "react";
import "./Menu.css"
import BtnMenu from "../BtnMenu/BtnMenu";
import { TiHeartOutline, TiStarOutline, TiPointOfInterestOutline,TiTickOutline } from "react-icons/ti";
import {Link} from 'react-router-dom'

function Menu(){
    return(
        <div>
            <Link to="/">
                <BtnMenu icone={<TiStarOutline />} nomeBtn="Home" />
            </Link>
            <BtnMenu icone={<TiHeartOutline />} nomeBtn="Favoritos" />
            <BtnMenu icone={<TiPointOfInterestOutline />} nomeBtn="Desejados" />
            <BtnMenu icone={<TiStarOutline />} nomeBtn="Avaliados" />
            <Link to="/resenhas">
                <BtnMenu icone={<TiStarOutline />} nomeBtn="Resenha" />
            </Link>
        
        </div>
    );
}

export default Menu;