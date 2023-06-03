

const ItemCount = ({cantidad, setCantidad, stock, agregar}) => {
    

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    
    
    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn mx-1 ${cantidad === 1 ? "btn btn-outline-danger" : "btn btn-outline-primary"}`}
                disabled={cantidad === 1}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>

            <button 
               onClick={handleSumar} 
               className={cantidad === stock ? "btn btn-danger" : "btn btn-primary"}
               disabled={cantidad === stock}
            >
               +
            </button>
           <br/>
           <button onClick={agregar} className="btn btn-success my-3">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount