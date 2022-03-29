import { useContext } from "react"
import { AppContext } from "../../../../App"
import { useParams } from "react-router-dom"
import CreateProduct from "../Create Product/CreateProduct"

export default function EditProduct(){

    const {state} = useContext(AppContext)
    const {id} = useParams()
    
    let product = state.find(product=>product.id===Number(id))
    if(product)
    return (
        <CreateProduct action='edit' product={product}/>
    ) 
    else return null
}