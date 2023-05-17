import { useEffect, useState } from "react"
import { pedirDatos } from "../util/pedirDatos"

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => setProductos (data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    return ({
        productos,
        loading
    })
}  