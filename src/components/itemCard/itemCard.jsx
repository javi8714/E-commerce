


const ItemCard = ({item}) => {

    return (
        <div className="col-3 m-3">
            <h3>{item.nombre}</h3> 
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <button className="btn btn-primary">Ver mas..</button>  
        </div>
    )
}

export default ItemCard