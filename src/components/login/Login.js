import React,{useState} from 'react';
import Form from '../form/Form';
import {useHistory} from 'react-router-dom';
import {signin} from '../../services/index';

export default function Login() {

    const history = useHistory();

    const [formValue, setFormValue] = useState({
      email:'',
      password:'',
    });

    const handleChange = (e)=>{

        setFormValue({...formValue,[e.target.name]:e.target.value})
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const userIn = await signin(formValue.email,formValue.password);
        history.push("/companias");  
        console.log(userIn);
  
      }


    return (
        <div className="row my-4">
        <div className="col-md-4 offset-4">
         <div className="card">
        <div className="card-body">
            <Form handleSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
        onChange={handleChange}
        name="email"
        />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control"
             id="password"
             onChange={handleChange}
             name="password"
             />
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
          </Form> 
        </div>
        </div>
        </div>
        </div>
    )
}
