// abb yahan hm fargments bnaye ge
// pehle react or userContext ko import krlo

import React from "react";
import UserContext from "./UserContext";

// abb ek method bna lenge,, children bss ek generic naam hh iska mtlb jo bhi aapke pass aa rha h bss vo aage pass krdo
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null) //jo bhi API call hogi vo yahan hogi, aur jo access mil gya hh vo sidha value mein throw krdo
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

// abb is method ko export krlo
export default UserContextProvider