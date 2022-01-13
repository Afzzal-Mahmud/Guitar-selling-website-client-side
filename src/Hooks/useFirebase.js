import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"

/* for creating user */
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

/* initialize firebase */
initializeFirebase()

const useFirebase = () =>{
    const [user,setUser] = useState({})
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
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

    /* google logIn */
    const signInWithGoogle = (location,history) =>{
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then((result) =>{
            const user = result.user;
            setAuthError('')
            const destination = location?.state?.from || '/';
            history.replace(destination)
        }).catch((error) =>{
            setAuthError(error.message)
            console.log(error.message)
        }).finally(() => setIsLoading(false))
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
    const logInUser = (email,password,location,history) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            /* this mean where user wants to go */
            const destination = location?.state?.from || '/';
            history.replace(destination)

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
        logOut,
        signInWithGoogle
    }
}

export default useFirebase