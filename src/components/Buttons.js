import React from "react";
import "./Buttons.css";


function AbsButton(props){
    return(
        <button
            className="botoes"
            id={props.id}
            onClick={() => { props.funcao(); }}>
            { props.value }
        </button>
    );
}


export { AbsButton };