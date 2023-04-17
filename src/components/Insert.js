import React, { useState } from "react";
import './Insert.css';


function FormComponent(props){
    let whenChange = (evento) => {
        props.alteration(evento.target.value);  //setValor(evento.target.value);
    }

    return (
        <div className="Component">
            <label>{props.inputLabel}</label>
            <input
                placeholder={props.inputHolder} onChange={whenChange}
                value={props.valor} type={props.tipo} maxLength={props.maximo} />
        </div>
    )
}



function Insert(props){
    const [getcapa,setCapa] = useState('');
    const [gettitulo,setTitulo] = useState('');
    const [getgenero,setGenero] = useState('');
    const [getlancamento,setLancamento] = useState('');
    const [getplataformas,setPlataformas] = useState('');
    //console.log(getlancamento);

    function eraseForm(){
        const setList = [setCapa,setTitulo,setGenero,setLancamento,setPlataformas];
        for(let campo=0; campo<setList.length; campo++){
            setList[campo]('');
        }
    }

    let whenSubmit = (evento) => {
        evento.preventDefault();
        if(getgenero == "" || gettitulo == ""){
            alert("The film needs at least a title and genre");
        }else{
            props.newFilm({ 
                capa: getcapa,
                titulo: gettitulo,
                genero: getgenero,
                lancamento: getlancamento,
                plataformas: getplataformas
            });
            alert("Film signed");
            eraseForm();
        }
    }

    return (
        <div className="insertWindow">
            <form onSubmit={whenSubmit} id="formulario" className="formulario">
                <h1>{props.tituloForm}</h1>
                <FormComponent inputLabel='Title' inputHolder='Film info here' maximo='49'
                    valor={gettitulo} alteration={ valora => setTitulo(valora) } />
                <FormComponent inputLabel='Genre(s)' maximo='49'
                    valor={getgenero} alteration={ valor => setGenero(valor) } />
                <FormComponent inputLabel='Release year' tipo='number' maximo='4'
                    inputHolder="Releases before 1900 will be set as '19th Century Film' "
                    valor={getlancamento} alteration={ valorin => setLancamento(valorin) } />
                <FormComponent inputLabel='Platforms' inputHolder='Limit of 99 characters'
                    valor={getplataformas}  alteration={ valor => setPlataformas(valor) } />
                <FormComponent inputLabel='Film Cover' inputHolder='Insert the film cover path here'
                    valor={getcapa} alteration={ valor => setCapa(valor)} />
            </form>
        </div>
    )
}


export default Insert;