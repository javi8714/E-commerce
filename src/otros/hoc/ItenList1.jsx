import { withProductsData } from "../hoc/withProductsData";
const ItenList1 = ( {productos, loading} ) => {

    return (
         <div className="container my-4 row">
            {
                loading 
                   ? <h2>Cargando..</h2>
                   : productos.map((item) => <ItemCard item={item} key={item.id}/>)
            }
        </div>
    )
}


export default withProductsData(ItenList1)