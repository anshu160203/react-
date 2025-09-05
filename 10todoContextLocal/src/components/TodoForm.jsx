import React, { useState } from 'react'
import { useTodo} from '../Contexts/TodoContext'

function TodoForm() {
    const [todo,  setTodo] = useState("")// state for individual todo

    const {addTodo} = useTodo()

    const add = (e) => { // object for addTodo,, in App.jsx rembember
      e.preventDefault()
      if (!todo) return
        
      addTodo({todo, completed : false}) // yahan hmne object liya kyuki hmne app.jsx ke andr addTodo mein spread krne ke liye ek object diya tha 
      setTodo("")// line 10 mein jo field todo leke aaya hh usko gayab krne ke liye.. ye kiya
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // isko wiring bolte hai,, ki wiring ho jaye input ki  hmare state ke sath
                onChange={(e) => setTodo(e.target.value)}
                
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;



