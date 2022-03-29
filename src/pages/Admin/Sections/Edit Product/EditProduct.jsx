import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../../../App"
import { useParams } from "react-router-dom"

export default function EditProduct(){

    const {state, dispatch} = useContext(AppContext)
    const {id} = useParams()

    
    let product = state.find(product=>product.id===Number(id))
    if(product)
    return (
        <form>
            {Object.entries(product)?.map(([key, value])=>
            <div>
                <label htmlFor={key}>{key}</label>
                <input type='text' name={key} value={value}/>
            </div>
            )}
        </form>
    ) 
    else return null
}