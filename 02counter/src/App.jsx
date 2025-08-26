import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // any value is given in this hook
    const [counter , setCounter] = useState(15)// this is a hook, responsible for changing the state, this change is propogated in UI
    // useState se 2 chije milti hh array ke format mein
    // zeroth index pe value milti hh variable,, 2nd thing is a function/method
    // setCounter is a method which controls the counter variable


    // let counter = 15 .. ye kabhu bhi UI mein reflect nhi hoga isliye comment kiya

    const addValue = () => {
    
          // counter = counter + 1 // when we use hooks we deny this method
      

        if (counter < 20) {
          setCounter(counter + 1)
        }   else {
          alert("you can't add value more than 20")
        }   
        }

    const removeValue = () => {
      

      if (counter > 0) {
        setCounter( counter - 1)
      } else {
        alert("We can't give you negative values")
      }
    } 

  return (
    <>
     <h1> Learning react</h1> 
     <h2>counter value : {counter} </h2>

     <button 
           onClick={addValue}>Add value  </button>
     <br />   
     <button
           onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
