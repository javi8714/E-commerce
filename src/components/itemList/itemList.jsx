import ItemCard from "../itemCard/itemCard"



const ItemList = ( {items}) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr />

            <div className="row">

                {
                    items.map ((product)  => <ItemCard item={product} key={product.id}/>)
                }
            </div>
        </div>
    )
}

export default ItemList