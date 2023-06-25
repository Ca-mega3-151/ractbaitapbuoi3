import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Dropdown() {
  return ( 
    <div className="dropdown">
      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Ấn đi nào !
      </a>

      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Picaso</a></li>
        <li><a className="dropdown-item" href="#">Zicc</a></li>
        <li><a className="dropdown-item" href="#">kaka</a></li>
      </ul>
    </div>
  );
}

export {  Dropdown}  