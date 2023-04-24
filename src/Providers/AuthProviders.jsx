import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import FirebaseApp from "../Firebase/firebase.config";

export const UserContext = createContext(null);

const auth =getAuth(FirebaseApp)

// Sign in with google auth provider
const signInWithGoogleAuth = new GoogleAuthProvider();

// Just for demo purposes starting
const UserInfo = { displayName: "Xander Xone", email: "xander@xone.com" };
// Demo purposes ended

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    // Set Loader state
    const [loader, setLoader] = useState(true)

    // Observe auth state changes
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state changed to ', currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe();
        };
    },[])

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // SignIn user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out user
    const logOutUser = () => {
        return signOut(auth)
    }

    // Sign In with Google account
    const signInWithGoogleAccount = () => {
        return signInWithPopup(auth, signInWithGoogleAuth)
    }

    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logOutUser,
        loader,
        signInWithGoogleAccount
    }
  return (
    <div>
      <UserContext.Provider value={AuthInfo}>
        {children}
        </UserContext.Provider>
    </div>
  );
};

export default AuthProviders;
