import React from "react";

import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

/* bootstrap */
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function PrivateRoute({children,...rest}) {
    const {user, isLoading} = useAuth()

   if(isLoading){
       return <>
       <Button className="spinnar-style" variant="primary" disabled>
        <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
    </Button>
    </> 
   }
   
    return(
        <Route
        {...rest}
        render={({location})=>user.email ? children 
        :<Redirect 
        to={
            {
                pathname:'/login',
                state:{from : location}
            }
        }
        ></Redirect>}
       >

       </Route>
    )
}
export default PrivateRoute;