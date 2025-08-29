import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data , setData] = useState({})// ek empty object daal diya in case fetch call nhi aa rhi hh to crash nhi kre ga
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json)// here data is converted into json
        .then((res)=> setData(res[currency]))// currency ko access kiya hai
        console.log(data);
    } , [currency])// dependency array,, use effect ko dobara shuru/reload krne ke liye
    console.log(data);
    return data
} 

export default useCurrencyInfo;