import { useEffect } from "react";  
import { useState } from "react";   



export const useFetch = (url, arr => []) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((resp)   => resp.json())        
            .then((resp)   => setData(resp))
            .catch((error) =>  console.log(error))  
    }, arr)
   
    return ({data})
}    