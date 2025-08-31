import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    
    // problem ye ki iss userContext ke aandr value kaise fetch kru ga m
    // uske liye help krta hh ye useContext,, jis trh se useState hook use kiya h usi trh se ise bhi use kre ge 

    const {setUser} = useContext(UserContext)// ye hmne bss deta bheja h abhi
    // ye setUser hmne UserContextProvider se lii hh,, set user ka access hme iss useContext se mil rha hai
    // is useContext ke aandr vo context dena pdta hai,, properly context doge tbhi aap us se setUser le paaoe ge


    // pehle to iss handleSubmit mein event aaye ga ek (e),, aur abb uske default behaviour ko hm prevent kr denge
    // preventDefault isliye kiya kyoki jb hm byDefault submit krte hh to value url ke through kahi na kahi chli jaati hai ya fir post method ke through chli jaati hai
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        {" "}
        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login