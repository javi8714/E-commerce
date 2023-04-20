import "./ItemListContainer.css"


export const ItemListContainer = ({saludo}) => {

    return (
        <div className="list_container">
          <h2>Item List Container</h2>
          <hr />
          <p>{saludo}</p>
        </div>
    )
}   