import firebaseInit from "../Firebase/FirebaseInit";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const createUserUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setIsLoading(true);
            // Sign-out successful.
            setError('logout successful');

        }).catch((error) => {
            // An error happened.
            setError(error.code)
        }).finally(() => setIsLoading(false));
    }

    return {
        createUserUsingEmailPassword,
        signInUsingEmailPassword,
        setError,
        user,
        error,
        isLoading,
        setIsLoading,
        logOut,
        setUser
    }
};

export default useFirebase;