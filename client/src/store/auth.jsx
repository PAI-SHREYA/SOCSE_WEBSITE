import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const  AuthProvider= ({Children}) =>{
    const [token,setToken]= useState(localStorage.getItem("token"));
    const storetokenInLS =(servertoken)=>{
        return Storage.setItem("token",servertoken)
    };
let isLoggedIn = !!token;
console.log(isLoggedIn);
console.log(token);
const LogoutUser=()=>{
setToken("");
return localStorage.removeItem("token");
};
    return (
        <AuthContext.Provider value={{isLoggedIn,storetokenInLS,LogoutUser}}>
        {Children}
    </AuthContext.Provider>

    );
   

};

export const useAuth =()=>{
    const authContextvalue=useContext(AuthContext);
    if(!authContextvalue)
    {
        throw new Error("useAuth used outside the provider");
    }
    return authContextvalue;
};