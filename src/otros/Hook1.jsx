import { useProductos } from "../hooks/useProductos"


const Hook1 = () => {

    const {loading, productos} = useProductos ()

    return (
        <div>
            {
                loading ? "cargando..." : "cargado"
            }
        </div>
    )
}

export default Hook1