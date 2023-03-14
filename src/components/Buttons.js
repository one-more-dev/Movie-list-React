import React from "react";
import "./Buttons.css";


var turn = true;
function LightFunction(this_class){
    let estilo = document.getElementsByClassName(this_class)[0];
    if(turn == true){
        turn = false;
        estilo.style.color = "white";
        estilo.style.backgroundColor = "black";
    }
    else{
        if(turn == false){
        turn = true;
        estilo.style.color = "black";
        estilo.style.backgroundColor = "white";        
        }
    }
}

function ToggleFunction(classeInicial,classeNova){
    const item = document.querySelectorAll(classeInicial);
    //item[1].classList.toggle(classeNova);
    for(let i=0; i < item.length; i++){
        console.log("Bora, bora");
        item[i].classList.toggle(classeNova);
    }
}



//  {} Is used if I want to pass an Arg when calling the Component. Otherwise it can be used normally
function LightButton({estilo}){
    return(
        <button className="botoes" onClick={() => LightFunction(estilo)}>Light/Dark</button>
    )
}

function ToggleButton({c1,c2}){
    return(
        <button className="botoes" onClick={() => ToggleFunction(c1,c2)}>Toggle View</button>
    )
}


export { LightButton, ToggleButton };