import React,{useEffect,useState} from 'react'
import {cargarProyectos,deleteTicket} from '../../services/index';
import ModalForm from '../Modalform/ModalForm';


export default function Proyectos({nameP}) {
    const [proyectos, setProyectos] = useState([]);
    const [data, setData] = useState({
        activar:false,
        id:'',
        operacion:'',
        nameDB:''
    });

    const toggle = (id,operacion)=>{
        setData({activar:!data.activar,
                id:id,
                operacion,
                nameDB:nameP
            });
    }

    const deleteIt = async(id,nameBase)=>{
        await deleteTicket(id,nameBase)
    }

    const cargarTodo = async ()=>{
        const lista = await cargarProyectos(nameP);
        setProyectos(lista);
    }

    useEffect(() => {
        cargarTodo();
    }, []);
    return (
        <>
        <div className="d-flex justify-content-between" >
        <h2 className="text-center">Historial de usuario:</h2>
        <button className="btn rounded-pill" style={{background:"orange"}}  onClick={()=>{
            toggle('','crear',nameP)}}>Crear un ticket personalizado <span className="fw-bolder text-lg ">+</span></button>
        </div>

        <div className="row my-4">
            { proyectos.map(proyecto =>(
                <div className="col-md-4 my-2" key={proyecto.id}>    
            <div className="card mb-3">
                <div className="card-header">
                    <h5>{proyecto.historia}</h5>
                </div>
            <div className="card-body">
                <p className="my-3">Proyecto: {proyecto.proyecto}</p>
                <hr/>
                <p className="my-3">Comentarios: {proyecto.comentario}</p>
                <hr/>
                <p className="my-3">Estado: <span className="rounded-pill p-1" style={{background:"orange"}}>{proyecto.estado}</span></p>
                <div className="d-flex justify-content-between">
                <button className="btn btn-danger"
                onClick={()=>{
                    deleteIt(proyecto.id,nameP)
                }}>Eliminar</button>   
                <button className="btn btn-primary" onClick={()=>{
                    toggle(proyecto.id,'editar')
                }}>Editar</button>   
                </div>
            </div>    
            </div>
        </div>
        ))
}
        </div>
        <ModalForm toggle={toggle} active={data} id={null}>
        </ModalForm>

        </>    
    )
}
