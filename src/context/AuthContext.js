import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../services/firebase';
// Varible globar heredada
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
// El hijo será otros componentes:
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    //Para que mantega actualizado:
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)

        })
        return unsubscribe
    }, []);

    const value = {
        currentUser
    }

    return (
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
