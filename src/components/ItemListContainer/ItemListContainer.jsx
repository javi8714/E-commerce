import { useEffect } from "react"
import "./ItemListContainer.scss"
import { useState } from "react"
import { pedirDatos } from "../../util/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useProductos } from "../../hooks/useProductos"
import { useParams } from "react-router-dom"



export const ItemListContainer = () => {

   // const { loading, productos } = useProductos()

   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState(true)

   const { categoryId } = useParams()
   console.log(categoryId)
    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                if (!categoryId) {
                    setProductos(data)
                } else {
                    setProductos(data.filter((el) => el.category === categoryId) )
                }      
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <div className="container my-5">
            {
              loading
                ? <h2> Cargando.....</h2>
                : <ItemList items={productos}/>
            }          
        </div>
    )
}    







