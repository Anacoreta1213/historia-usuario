import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import  {AuthProvider}  from './context/AuthContext';
import PrivateRoute from "./components/PrivateRoute";
import Companias from './components/companias/Companias';
import Footer from './components/footer/Footer';
import Historias from './components/historias/Historias';
function App() {
  return (
    <Router>
      <AuthProvider>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup" component={Signup} />
        <Route path="/historias/:nombre" component={Historias} />
        <PrivateRoute path="/companias" component={Companias}/>
      </Switch>
      <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
