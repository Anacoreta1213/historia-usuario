import React,{useState} from 'react';
import Form from '../form/Form';
import {useHistory} from 'react-router-dom';
import {signup} from '../../services/index';

export default function Signup() {
    
    const history = useHistory();

    const [formValue, setFormValue] = useState({
        email:'',
        password:'',
        passwordConfirm:''
      });
  
    const handleChange = (e) => {
    setFormValue({...formValue,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

          await signup(formValue.email,formValue.password);
          history.push("/signin")
  
        }
        
    return (
        <div className="row my-5">
            <div className="col-md-4 m-auto">
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
          <div className="mb-3">
            <label htmlFor="passwordConfirm" className="form-label">Password confirm</label>
            <input type="password" className="form-control" id="passwordConfirm"
            onChange={handleChange}
            name="passwordConfirm"
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button> 
          </Form>
            </div>
            </div>
            </div>
        </div>
    )
}

