import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"

/* for creating user */
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

/* initialize firebase */
initializeFirebase()

const useFirebase = () =>{
    const [user,setUser] = useState({})
    const auth = getAuth()

    /* defin a loding state */
    const [isLoading,setIsLoading] = useState(true)

    /* for error message */
    const [authError,setAuthError] = useState('')

    /* create user with email and password */
    const registerUser = (email,password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            setAuthError('')
            console.log(user)
        })
        .catch((error) =>{
            const errorMessage = error.message;
            console.log(errorMessage)
            setAuthError(errorMessage)
        }).finally(() => setIsLoading(false));
    }

    /* for observe user */
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth,(user) =>{
            if(user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    },[])

    /* logIn user with email and password */
    const logInUser = (email,password) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            const user = userCredential.user;
            setAuthError('')
            console.log(user)
        })
        .catch((error) =>{
            const errorMessage = error.message;
            console.log(errorMessage)
            setAuthError(errorMessage)
        }).finally(() => setIsLoading(false))
    }
    /* log Out user */
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            // user sign out
        }).catch((error) => {
            console.log(error.message)
        }).finally(() => setIsLoading(false))
    }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        logInUser,
        logOut
    }
}

export default useFirebase