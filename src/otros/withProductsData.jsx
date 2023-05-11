import { useState, useEffect } from "react";



export const withProductsData = (Component) => {
    const WithProductsData = (props) => {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)


        useEffect(() => {
            setLoading(true)

            pedirDatos()
                 .then((data) => setProductos(data)) 
                 .catch((error) => console.log(error))
                 .finally(() => setLoading(false))
        }, [])
        
        return (
            <Component productos={productos} loading={loading} {...props}/>
        )
    }

    return WithProductsData
}        