import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"




const Error404 = () => {
    const [timer, setTimer] = useState(4)
    
    const navigate = useNavigate()

    if (timer === 0) navigate(-1)

    useEffect(() => {
        setInterval(() => {
            setTimer((state) => state -1 )
        }, 1000)    
    }, [])

    return (
        <div className="container my-4">
           <h1>No se encontro la pagina solicitada</h1>
            <hr />

            <h4>Sera redireccionado en {timer} segundos.....</h4>               
        </div>
    )
}    

export default Error404