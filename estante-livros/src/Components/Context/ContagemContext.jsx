import React from "react";

const ContagemContext = React.createContext({
    contagemLido:0,
    setContagemLido: () => {}, //arrow function
    contagemVouLer: 0,
    setContagemVouLer: () => {}

});


export default ContagemContext;