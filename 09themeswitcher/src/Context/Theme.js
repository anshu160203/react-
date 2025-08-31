import { createContext, useContext } from "react";

// here we are giving default values,, initial state pe bhi hm kuch value de skte hai
// jb bhi koi context call kre ga tb ye theme bhi mil jayega aur ye method bhi mil jaye ge 
// sirf state hi ni aap kuch bhi pass kr skte ho
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// provider hm yahan se bhi pass kr skte h aur to aur hm yahan custom hooks bhi bna skte hai
export const ThemeProvider = ThemeContext.Provider

// hook,, custom hook aapne aap mein ek function hi hai aur use keyword hm unke sath lgate hai
export default function useTheme(){
    return useContext(ThemeContext)
}

// abb ye do-do kaam na krke,, kyoki yw context yhi pe set hogya hai,, to hme bss yahan se useTheme hi to import krna hai