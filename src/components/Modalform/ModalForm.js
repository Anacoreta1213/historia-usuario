/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from 'react';
import Portal from './Portal';
import Form from '../form/Form';
import {useAuth} from '../../context/AuthContext';
import {createTicket,updateTicket} from '../../services/index';
import {useHistory} from 'react-router-dom';
function ModalForm({toggle,active}) {

    const historia = useHistory();
    const { currentUser } = useAuth();

    const [ticket, setTicket] = useState({
            historia:'',
            proyecto:'',
            comentario:'',
            estado:'',
            idUser:''
    })

    const handleChange = (e)=>{
        setTicket({...ticket,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(active.operacion ==="crear"){
        setTicket({...ticket,idUser:currentUser.uid})
        createTicket(ticket,active.nameDB);

        }
        if(active.operacion ==="editar"){
            updateTicket(active.id,ticket,active.nameDB);

        }
    }
    
    return (
        <Portal>
        {active.activar && (
        <div className="wrapper">
        <div className="window">
        <button className="btn btn-primary position-absolute top-0 end-0 mx-3 mt-1" onClick={toggle}>
            X
        </button>
        <div>

         <Form handleSubmit={handleSubmit}>
         <div className="mb-3">
            <input type="text"
            placeholder="Historia"
            className="form-control"
            onChange={handleChange}
            name="historia"
            value={ticket.historia}
            />
          </div>
          <div className="mb-3">
            <input type="text"
            className="form-control"
            placeholder="¿Cúal proyecto es?" 
            onChange={handleChange}
            name="proyecto"
            value={ticket.proyecto}
            />
          </div>
          <div className="mb-3">
            <textarea type="text"
            className="form-control"
            placeholder="Escribe un comentario"
            onChange={handleChange}
            name="comentario"
            value={ticket.comentario}
            ></textarea>
          </div>

         <div className="mb-3">
            <input type="text"
            className="form-control"
            placeholder="Estado"
            onChange={handleChange}
            name="estado"
            value={ticket.estado}
            />
          </div>

          <button type="submit" className="btn btn-primary">{
            active.operacion ==="crear"?"Crear ticket":"Editar ticket"
          }</button> 
         </Form>
        </div>
        </div>
        <div onClick={toggle} className="back"></div>
        </div>  
        )

        }
        </Portal>
    )
}



export default ModalForm
