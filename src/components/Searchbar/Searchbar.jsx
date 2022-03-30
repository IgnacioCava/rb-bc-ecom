import { useState } from 'react'
import { SearchForm, SearchInput } from './SearchbarStyled'

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