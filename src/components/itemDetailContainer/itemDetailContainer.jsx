import { useEffect, useState } from "react"
import { pedirDatos } from "../../util/pedirDatos"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data)  => setItem( data.find((el) => el.id === Number(itemId)) ))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    
    return (
    
        <div className="container my-4">
            {  
                loading
                  ? <h2>Cargando....</h2>
                  :  <ItemDetail item={item}/>


            }  
        </div>            
    )
}

export default ItemDetailContainer
