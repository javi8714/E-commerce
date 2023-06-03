import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, writeBatch, addDoc, where, documentId, getDocs, query } from "firebase/firestore"
import {  db }  from "../../firebase/config"
import {  Link }  from "react-router-dom"
import { Formik } from 'formik'


const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {
        

        const { nombre, direccion, email } = values

        if (nombre.length < 3) {
            alert("El nombre esta incompleto")
            return
        }
        if (direccion.length < 3) {
            alert("La direccion no se completo")
            return
        }
        if (email.length < 5) {
            alert("El email no se encontro")
            return
        }
        
        const orden ={
            users: values,
            items: cart.map(item =>({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra(),
            fechayhora: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const q = query(productosRef, where( documentId(), "in", cart.map(item => item.id) ))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock


            if (stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0 ) {
            addDoc (ordersRef, orden)
                .then((doc) => {
                        batch.commit()
                        setOrderId(doc.id)
                        emptyCart()
                    })          
        } else {
            alert("Hay item sin stock")
        }

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra fue echa con exito!</h2>
                <hr/>
                <p>Guarda tu numero de orden: {orderId}</p>

                <Link to="/">Volver a la pagina principal</Link>
            </div>
        )
    }
    
    if (cart.length === 0) {
        return <Navigate to="/" />
    }
   
    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email:''
                }}
                onSubmit={generarOrden}
            >
                {({values, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control my-3"
                            type="text"
                            placeholder="Nombre"
                            value={values.nombre}
                            name="nombre"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control my-3"
                            type="text"
                            placeholder="Direccion"
                            value={values.direccion}
                            name="direccion"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control my-3"
                            type="text"
                            placeholder="Email"
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                        />

                         <button className="btn btn-primary" type="submit">Enviar</button>
                    </form> 
                )}
            </Formik>


        </div>

    )


}

export default Checkout