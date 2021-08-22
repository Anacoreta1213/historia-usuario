/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ReactDOM from 'react-dom';
const portalRoot = document.getElementById('modal-root');

class Portal extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.el = document.createElement('DIV');

  }

    componentDidMount(){
      portalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      portalRoot.removeChild(this.el);
    }

  render(){
    const {children}=this.props;
    return ReactDOM.createPortal(children,this.el);
  }
}

export default Portal;


