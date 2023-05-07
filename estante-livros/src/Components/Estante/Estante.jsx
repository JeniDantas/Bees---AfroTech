import React from "react";
import "./Estante.css";
import LivroAvaliado from "../../LivroAvaliado/LivroAvaliado";
import livro1 from "../assets/livro1.jpg";
import livro2 from "../assets/livro2.jpg";
import livro3 from "../assets/livro3.jpg";
import livro4 from "../assets/livro4.jpeg";
import livro5 from "../assets/livro5.png";
import livro6 from "../assets/livro6.png";




function Estante(){
    return(
        <div className="estante">
            <LivroAvaliado nota="3" capa={livro1}/>
            <LivroAvaliado nota="4" capa={livro2}/>
            <LivroAvaliado nota="5" capa={livro3}/>
            <LivroAvaliado nota="2" capa={livro4}/>
            <LivroAvaliado nota="4" capa={livro5}/>
            <LivroAvaliado nota="5" capa={livro6}/>
        </div>
    );
}

export default Estante;