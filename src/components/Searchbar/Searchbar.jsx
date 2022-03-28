import { Link } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from "react-redux"

export default function Searchbar(){

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleInput(e){
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search' onChange={handleInput}/>
            <input type='submit' value='Search'/>
        </form>
    )
}