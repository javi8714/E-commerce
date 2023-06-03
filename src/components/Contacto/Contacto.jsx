import { useState } from "react"




const Contacto = () => {
    const [values, setValues] = useState({
       nombre: '',
       email: '',
       direccion: ''
    })

    const handleImputChange = (e) => {
        console.log(e.target.name)


        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit")
        console.log(values)
    }
    
    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
               <input 
                   name="nombre"
                   value={values.nombre}
                   onChange={handleImputChange}
                   className="form-control my-2"  
                   type="text"
                   placeholder="Tu nombre"
                />

               <input 
                   name="direccion"
                   values={values.direccion}
                   onChange={handleImputChange}
                   className="form-control my-2"  
                   type="text"
                   placeholder="Direccion"
                />

               <input 
                   name="email"
                   value={values.email}
                   onChange={handleImputChange}
                   className="form-control my-2"  
                   type="email"
                   placeholder="email"
                />

               <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto