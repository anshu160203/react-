
import { createContext, useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  
  const [themeMode, setThemeMode] = useState('light')
 /*abb themeMode ke aandr hamre pass direct value light hai,, lekin hmare pass methods ka acess hh
   hamre pass abb light theme aur dark theme inn methods ka acess hh lekin ye kuch kr nahi rhe hai,, hmne abhi inki
   functionality define nhi kii hai,, to aise case mein inn functions ko lo aur inko as it is exactly isi naam ke methods mein define krdo
   vo functionality aapne aap unke aandr chli jaati hai
 */

   const lightTheme = () => {
    setThemeMode("light")
   }

   const darkTheme = () => {
    setThemeMode("dark")
   }

   // actual change in a theme

   useEffect(() => {
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
   }, [themeMode])
   

  return (
   // abb theme provider ke aadnr jo values hh abb hmare pass unka direct acess hai theme buttona aur card dono ko inka acess mile ga
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
