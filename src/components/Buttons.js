import React from "react";
import "./Buttons.css";
//alert("Zephyr");


function LightFunction(this_class){
    const estilo = document.querySelector(this_class)[0];
    return ( estilo.style.color = "red" )
}


function ToggleButton(){
    return(
        <button className="botoes">Toggle View</button>
    )
}


function LightButton({estilo=""}){
    return(
        <button className="botoes">Light/Dark</button>
    )
}


export { LightButton, ToggleButton };