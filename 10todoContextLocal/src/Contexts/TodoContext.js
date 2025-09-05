import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [ // properties/values
        {
            id:1,
            todo: " Todo message",
            completed: false,
        }
    ],
    addTodo: (todo) => {},   // functionality,, pass only name no defination
    updateTodo: (id, todo) => {}, // not togle,, whole todo is updated,, we need id and a todo
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
}) // isko export kr denge,, todo ka jb context bnaye ge tb isko default value chaiye hogi


// kyuki hme baar baar use context ke aandr vapis se context daalo import krke vo nhi krna,, to hm hook hi export kr dete hh useTodo krke
// usetodo itna jyada kuch kaam nhi kre ga bss ek method hai,,aur kuch nhi hai
export const useTodo = () => {
    return useContext(TodoContext) // ye use context ko conext chaiye hota hai to vo main file meina na krke sidha yahan kr denge,, aur export kr denge,, isko todocontext dena hai
    // jb bhi useContext loge use ek context dena pde ga,, ki kiske baare mein baat kr rhe hai
}

export const TodoProvider = TodoContext.Provider