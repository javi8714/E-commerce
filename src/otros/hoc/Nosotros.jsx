import { withProductsData } from "./withProductsData" 



const Nosotros = ({productos, Loading}) => {
    console.log(productos)

    return (
        <div>
            <h2>Nosotros</h2>
            <hr />
        </div>

    )
}

export default withProductsData(Nosotros)