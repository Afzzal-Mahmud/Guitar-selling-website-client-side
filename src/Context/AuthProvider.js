import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

const AuthContext = createContext(null)

function AuthProvider({children}) {
    const allContext = useFirebase()
    return(
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider