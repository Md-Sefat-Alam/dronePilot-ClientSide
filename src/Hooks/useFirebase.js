import firebaseInit from "../Firebase/FirebaseInit";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


firebaseInit();

const useFirebase = () => {
    const [loginUser, setLoginUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [emailPass, setEmailPass] = useState({});

    const auth = getAuth();
    const email = emailPass?.email;
    const password = emailPass?.password;

    const createUserUsingEmailPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // serLoginUser(userCredential.user)
                alert('Register Successful')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });
    }
    const signInUsingEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setLoginUser(userCredential.user)
                alert('Login Successful')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setLoginUser(user)
            }
            else {
                setLoginUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('logout successful')

        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        createUserUsingEmailPassword,
        signInUsingEmailPassword,
        setEmailPass,
        loginUser,
        error,
        isLoading,
        logOut
    }
};

export default useFirebase;