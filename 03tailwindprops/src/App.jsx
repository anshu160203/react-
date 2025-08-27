import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
// we can do anything in tailwind in css it makes easy to inject css it also contains images

function App() {
    const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
   
  return (
    <>
      <h1 className='bg-yellow-400 text-black rounded-xl' >Tailwind test</h1>
      <Card username= "Himanshu" />
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}

export default App
