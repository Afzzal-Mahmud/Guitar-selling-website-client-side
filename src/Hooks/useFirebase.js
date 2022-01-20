import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"

/* for creating user */
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

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

    /* check for admin or not */
    const [isAdmin,setIsAdmin] = useState(false)

    /* authToken */
    const [authToken,setAuthToken] = useState('')


    /* create user with email and password */
    const registerUser = (userName,email,password,history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.name = userName
            setUser(user)
            /* send user data to the database */
            saveUser(email,userName,'POST')
            /* send user name to firebase */
            updateProfile(auth.currentUser, {
                displayName: userName
              }).then(() => {
                // Profile updated!
              }).catch((error) => {
                console.log(error.message)
              });

            setAuthError('')
            console.log(user)
            history.replace('/')
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
            saveUser(user.email,user.displayName,'PUT')
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
                getIdToken(user)
                .then(idToken => {
                    setAuthToken(idToken)
                })
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

    /* checking user is admin or not and setState based on user */
        useEffect( () =>{
            console.log('from admin panel under useEffect')
            const url = `https://fierce-beyond-84290.herokuapp.com/useradmin/${user.email}`
            fetch(url)
            .then(Response => Response.json())
            .then(data => {
                setIsAdmin(data.admin)
            })
        },[user.email])

    /* send user data to the database */
    const saveUser = (email,displayName,method) =>{
        const user = {email,displayName}
        fetch('https://fierce-beyond-84290.herokuapp.com/users',{
            method : method,
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        isAdmin,
        authToken,
        isLoading,
        authError,
        registerUser,
        logInUser,
        logOut,
        signInWithGoogle
    }
}

export default useFirebase