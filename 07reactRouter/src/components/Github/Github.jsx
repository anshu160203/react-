import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/anshu160203')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
    }, [])
    
  return (
    <div className='text-centre m-4 text-white text-3xl bg-gray-600 p-5'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// second and a good approach,, it delays the time of loading,, using a loader,, but i don't understand so i use first

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/anshu160203')
//     return response.json()
// }