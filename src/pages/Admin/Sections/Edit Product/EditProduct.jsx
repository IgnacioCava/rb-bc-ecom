import { useContext } from "react"
import { AppContext } from "../../../../Store"
import { useParams } from "react-router-dom"
import CreateProduct from "../Create Product/CreateProduct"

export default function EditProduct(){

    const {state} = useContext(AppContext)
    const {id} = useParams()
    
    const product = state.find(product=>product.id===Number(id))
    
    if(product) return <CreateProduct action='edit' product={product}/>
    else return <h1>Product not found</h1>
}