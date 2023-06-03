import { useEffect } from "react"
import { withProductsData } from "./withProductsData" 



const Nosotros = ({productos, Loading}) => {
    
    const handleclickear = (event) => {
        console.log(event)
    }

    useEffect(() => {
        window.addEventListener('click', handleclickear) 

        return () => {
            window.removeEventListener('click', handleclickear)
        }

    }, [])


    return (
        <div className="container my-5" oneClick={clickear}>
            <h2>Nosotros</h2>
            <hr />
        </div>

    )
}

export default withProductsData(Nosotros)