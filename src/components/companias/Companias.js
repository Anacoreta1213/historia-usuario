import React,{useEffect,useState} from 'react'
import 'firebase/firestore';
import {Link} from 'react-router-dom';
import { db } from "../../services/firebase";

export default function Companias() {

    const [companias, setCompanias] = useState([]);

    const cargarCompanias = async()=>{
        const snapshot = await db.collection('companias').get();
        let listaCompanis = [];
        snapshot.forEach((doc) => {
        const data = doc.data();    
        listaCompanis.push({...data,id:doc.id});   
        console.log(doc.id)
        });
        setCompanias(listaCompanis);
    }

    useEffect(() => {  
        cargarCompanias();  
    }, [])

    return (
    <div>
        <h1 className="text-center especial">Elige una compañía</h1>
        <div className="row container mt-5 mx-auto especial_dos">
        {    companias.map(compania =>(
            <div className="col-md-4" key={compania.nit}>
            <div className="card bg-dark">
            <div className="card-header">
            <h5 className="card-title">
            Empresa: {compania.nombre}
            </h5>
            </div>
            <div className="card-body">
            <p className="my-2">Nit:  {compania.nit}</p>             
            <p className="my-2">Dirección:   {compania.direccion}</p>             
            <p className="my-2">Correo:   {compania.email}</p>
            <p className="my-2">Id:   {compania.id}</p>

            <Link className="btn btn-primary btn-lg" to={`/historias/${compania.nombre}`}>
            Ver proyectos
            </Link>             
            </div>
            </div>            
            </div>
        ))
        }
        </div>
    </div>
    )
}
