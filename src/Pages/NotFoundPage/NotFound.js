import React from "react";
import { NavLink } from "react-router-dom";
import './NotFound.css';

function NotFound() {
    return (
       <div className='error-page-body'>
        <div className="error-page-main">
        <div className="error-page-content">
           <h2 className="header">
              404
           </h2>
           <h4>
              Opps! Page not found
           </h4>
           <p>
              Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
           </p>
           <div className="buttons">
              <NavLink to='/home' className='link'>Return Home</NavLink>
           </div>
        </div>
     </div>
     </div>
    )
}
export default NotFound