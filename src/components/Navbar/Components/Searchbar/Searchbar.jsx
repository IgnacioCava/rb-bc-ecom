import { Link } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from "react-redux"
import styled from "styled-components"

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
        <SearchForm onSubmit={handleSubmit}>
            <SearchInput type='text' placeholder='Search' onChange={handleInput}/>
            <SubmitButton type='submit' value='Search'/>
        </SearchForm>
    )
}

const SearchForm = styled.form`
    display: flex;
    border-radius: 5px;
    overflow:hidden;
    *{
        border:0;
        padding:5px;
    }
`

const SearchInput = styled.input`
    outline: none;
`

const SubmitButton = styled.input`
    background-color: white;
    cursor:pointer;
    transition: .1s;
    &:active{
        background-color: lightblue;
    }
`