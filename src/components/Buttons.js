import React from "react";
import "./Buttons.css";


var turn = true;
function LightFunction(this_class){
    let estilo = document.getElementsByClassName(this_class)[0];
    if(turn === true){
        turn = false;
        estilo.style.color = "white";
        estilo.style.backgroundColor = "black";
    }
    else if(turn === false){
        turn = true;
        estilo.style.color = "black";
        estilo.style.backgroundColor = "white";        
    }
}

function ToggleFunction(classeInicial,classeNova){
    const item = document.querySelectorAll(classeInicial);
    for(let i=0; i < item.length; i++){
        item[i].classList.toggle(classeNova);
    }
}


function buttonFunctions(variavel=0, propriedades=undefined){
    if(variavel <= 0){
        LightFunction(propriedades);
    }else if(variavel === 1){
        ToggleFunction(...propriedades);
    }else if(variavel > 1){
        if(propriedades != undefined){
            console.log(propriedades);
        }
    }
}


//{} Is used if I want to pass an Arg when calling the Component. Otherwise it can be used normally
function AbsButton(props){
    return(
        <button className="botoes" onClick={() => {
            buttonFunctions(props.variavel,props.propriedades) }}>{ props.value }</button>
    );
}


export { AbsButton };