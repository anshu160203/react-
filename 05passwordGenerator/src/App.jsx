import { useState, useCallback, useEffect, useRef } from 'react'
// in this we use hooks,, to use hook first we need to define it
/* useState-
   useCallback-
   useEffect-
   useRef- jb kissi bhi chij ka refrence lena hota hai to useRef ka use hota hai
*/


// declaring variables,,,,, input
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)



  //call back,, function ko run krta hh, memoize krta hh, usko optimised bnata hai usko cache mein rakhta hai
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-+=[]{}~`"

    for (let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length , numberAllowed, charAllowed , setPassword])// call back ka dependency array hai

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  // call back aur use effect dono alag alag chij hai,, never compare these

  // use effect, loop ko dobara shuru krne ke liye use kiya jaata hai,, agar dependency mein change hua to ye dobara run krega loop ko
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md
        rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-centre '>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          type="text"
          value={password}
          className='outline-full w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef} // passing refrence
          />
          <button 
             onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input // inputed values
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-centre gap-x-1'>
              <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
             <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
              </div>
          </div>
       </div>
   </>
  )
}

export default App
