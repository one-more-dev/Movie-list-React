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
                value={props.valor} type={props.tipo} maxlength={props.maximo} />
        </div>
    )
}


function Insert(props){
    const [getcapa,setCapa] = useState('');
    const [gettitulo,setTitulo] = useState('');
    const [getgenero,setGenero] = useState('');
    const [getlancamento,setLancamento] = useState('');
    const [getplataformas,setPlataformas] = useState('');

    let whenSubmit = (evento) => {
        evento.preventDefault();
        if(getlancamento < 1900){
            setLancamento('19th Century Film');
        }
        props.newFilm({ 
            capa: getcapa,
            titulo: gettitulo,
            genero: getgenero,
            lancamento: getlancamento,
            plataformas: getplataformas
        });
        alert("Film signed");
    }

    return (
        <div className="insertWindow">
            <form onSubmit={whenSubmit} id="formulario">
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
                <FormComponent inputTipo='file' inputLabel='Film Cover' tipo='file'
                    valor={getcapa} alteration={ valor => setCapa(valor)} />
            </form>
        </div>
    )
}


export default Insert;