import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';
import {logout,logeado} from '../../services/index';
import { useAuth } from '../../context/AuthContext';

export default function NavBar() {

  const { currentUser } = useAuth();

  useEffect(() => {
    logeado()
  }, []);

  const handleLogout = async ()=>{
  await logout();
  }

    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="#">Compañias.com</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {!currentUser && 
        <>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
        </>
        }
        {currentUser  &&
        <>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
        </li>
        <li>
          <Link className="nav-link" to="/companias" >Compañias</Link>
        </li>
        </>  
        }  
      </ul>
    </div>
  </div>
</nav>
</div>
)
}
