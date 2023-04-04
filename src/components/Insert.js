import React, { useState } from "react";
import './Insert.css';


function FormComponent({inputLabel,inputHolder=''}){
    let valor = '';
    let loadValue = (evento) => {
        valor = evento.target.value;
        console.log(valor);
    }

    return (
        <div className="Component">
            <label>{inputLabel}</label>
            <input placeholder={inputHolder} onBlur={loadValue}></input>
        </div>
    )
}


function Insert({titulo}){
    return (
        <div className="insertWindow">
            <h1>{titulo}</h1>
            <FormComponent inputLabel={'Title'} inputHolder={'Film info here'} />
            <FormComponent inputLabel={'Genre(s)'} />
            <FormComponent inputLabel={'Release year'} 
                inputHolder={"Releases before 1900 will be set as '19th Century Film' "} />
            <FormComponent inputLabel={'Platforms'} inputHolder={'Limit of 99 characters'} />
        </div>
    )
}


export default Insert;