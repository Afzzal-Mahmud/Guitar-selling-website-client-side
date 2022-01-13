import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"

/* for creating user */
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

/* initialize firebase */
initializeFirebase()

const useFirebase = () =>{
    const [user,setUser] = useState({})
    const auth = getAuth()

    /* create user with email and password */
    const registerUser = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) =>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }

    /* for observe user */
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth,(user) =>{
            if(user) {
                setUser(user)
            }else{
                setUser({})
            }
        })
        return () => unsubscribe;
    },[])

    /* logIn user with email and password */
    const logInUser = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user)
        })
    }
    /* log Out user */
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            // user sign out
        }).catch((error) => {
            console.log(error.message)
        })
    }
    return {
        user,
        registerUser,
        logInUser,
        logOut
    }
}

export default useFirebase