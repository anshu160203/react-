// step 1 :- import react from react
import React from "react";

// step 2 :- now create a context(context is a method so we store it in variable)
const UserContext = React.createContext()

// step 3:- throw variable in output,, jaise hi hmne context bnaya ye hme provider dega,, every context is a provider
export default UserContext;

// step 4:- abb iss usercontext ko wrap kra denge, ab ye ek provider bn gya hai, mtlb abb ye global variable hai
// isko top-level mein rakhe ge taki iske aaandr ke components directly sari states ka acess ke paaye
// abb ek context provider banye ge new file mein:- UserContextProvider

