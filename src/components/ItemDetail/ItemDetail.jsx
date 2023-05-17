



const ItemDetail = ({item}) => {

    return (
        <div className="col-3 m-2">
          <h3>{item.nombre}</h3>
          <img src={item.img} alt={item.nombre}/>
          <p>{item.descripcion}</p>
          <p>Categoria ${item.precio}</p>
          <p><strong>Precio: ${item.precio}</strong></p>
          

           <button className="btn -btn-primary">Agregar al carro...</button>          
        </div>
    )
}  

export default ItemDetail