import { withProductsData } from "./withProductsData" 



const Catalago1 = ({productos, Loading}) => {
    console.log(productos)

    return (
        <div>
            <h2>Catalogo1</h2>
            <hr />
        </div>

    )
}

export default withProductsData(Catalago1)