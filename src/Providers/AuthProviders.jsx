import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import FirebaseApp from "../Firebase/firebase.config";

export const UserContext = createContext(null);

const auth =getAuth(FirebaseApp)

const UserInfo = { displayName: "Xander Xone", email: "xander@xone.com" };

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    // Observe auth state changes
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(user, (currentUser) => {
            console.log('Auth state changed', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    } ,[])

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // SignIn user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const AuthInfo = {
        user,
        createUser,
        signInUser
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
