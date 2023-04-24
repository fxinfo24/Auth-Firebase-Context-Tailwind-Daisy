import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import FirebaseApp from "../Firebase/firebase.config";

export const UserContext = createContext(null);

const auth =getAuth(FirebaseApp)

const UserInfo = { displayName: "Xander Xone", email: "xander@xone.com" };

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    // Observe auth state changes
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state changed to ', currentUser);
            setUser(currentUser)
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

    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logOutUser
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
