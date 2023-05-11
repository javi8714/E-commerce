import { useEffect } from "react"
import "./ItemListContainer.scss"
import { useState } from "react"
import { pedirDatos } from "../../util/pedirDatos"
import ItemList from "../itemList/itemList"
import { useProductos } from "../../hooks/useProductos"


export const ItemListContainer = () => {

    const { loading, productos } = useProductos()

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







