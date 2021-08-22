import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
return(
<div className="position-fixed bottom-0 w-100">
<footer className="bg-dark text-center text-white mb-0">
  <div className="text-center p-3" style={{"backgroundColor": 'rgba(0, 0, 0, 0.2)'}}>
    © 2020 Copyright:
    <Link className="text-white" to="https://mdbootstrap.com/">
        ¿Qué dicen ustedes?
    </Link>
  </div>
</footer>
</div>
    )
}
