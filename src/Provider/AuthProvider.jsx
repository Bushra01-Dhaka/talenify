import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';

import { useEffect } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;    
        const loggedUser = {email: userEmail};
        console.log("User in the auth of current state", currentUser);
            setUser(currentUser);
            setLoading(false);
            //if user exist then issue a token
            if(currentUser)
            {
                
                 axios.post('https://talenify-server.vercel.app/jwt',loggedUser, {withCredentials: true})
                 .then(res => {
                    console.log('token response',res.data);
                 })
            }
            else
            {
                 axios.post('https://talenify-server.vercel.app/logout',loggedUser, {
                    withCredentials: true
                 })
                 .then(res => {
                    console.log(res.data);
                 })
            }


        });
        return () => 
        {
            unSubscribe();
        }
    }
    , []);

    const googleLogin = () => 
    {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
         user,
         createUser,
         signIn,
         loading,
         logOut,
         googleLogin
         
    }
    return (
        <AuthContext.Provider value={authInfo}>
               {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;