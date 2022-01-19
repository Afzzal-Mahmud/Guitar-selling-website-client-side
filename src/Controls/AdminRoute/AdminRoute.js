import React from "react";

import { Route, Redirect } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

/* bootstrap */
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function AdminRoute({children,...rest}) {
    const {user, isLoading,isAdmin} = useAuth()

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
        render={({location})=>user.email && isAdmin ? children 
        :<Redirect 
        to={
            {
                pathname:'/',
                state:{from : location}
            }
        }
        ></Redirect>}
       >

       </Route>
    )
}
export default AdminRoute;