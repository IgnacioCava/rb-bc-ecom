import { useState } from 'react'
import styled from "styled-components"

export default function Searchbar({search}){

    const [focus, setFocus] = useState(false)

    function handleInput(e){
        e.preventDefault()
        search(e.target.value)
    }
    return (
        <SearchForm focus={focus} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}>
            <SearchInput type='text' placeholder='Search' onChange={handleInput}/>
        </SearchForm>
    )
}

const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    overflow:hidden;
    box-shadow: ${props => props.focus ? '1px 3px 3px 2px #ccc' : '1px 2px 3px 1px #ccc'};
    transition: .5s;
    width: ${props => props.focus ? '30%' : '20%'};
    padding:${props => props.focus ? '10px' : '5px'};
    &:hover{
        box-shadow: 1px 3px 3px 2px #ccc;
    }
`

const SearchInput = styled.input`
    outline: none;
    width: 100%;
    border:0;
    transition: .25s ease-in;
`