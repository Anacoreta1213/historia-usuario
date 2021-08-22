import React from 'react';
import {useParams} from 'react-router-dom';
import Proyectos from '../proyectos/Proyectos';
function Historias() {

    const {nombre}= useParams();
    return (
    <>    
        <h1 className="text-center">Empresa: {nombre}</h1>
        <div className="container">
        <Proyectos nameP={nombre}/>
        </div>
    </>    
    )
}

export default Historias;
