import { useEffect, useMemo, useState } from 'react'
import { SearchForm, SearchInput } from './SearchbarStyled'
import reduceEntries from '../../helpers/reduceEntries'

export default function Searchbar({onSearch, elements, conditions, restrictions}){

    const [focus, setFocus] = useState(false)
    const [selectedEntry, setEntry] = useState('description')

    const entries = useMemo(()=>{
        return reduceEntries(elements, restrictions)
    },[elements, restrictions])

    function handleInput(e){
        const searched = e?.target.value||''
        const filteredProducts = elements.filter(element=>
            e? element[selectedEntry].toString().toLowerCase().includes(searched):true
            &&
            conditions? Object.entries(conditions).every(([key, value])=>element[key]===value):true // Checks if the element's values equal that of the conditions'

        )
        onSearch(filteredProducts)
    }

    return (
            <SearchForm focus={focus} >
                <SearchInput type='text' placeholder='Search' onChange={handleInput} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}/>
                {entries.length?
                <div>
                    <span>by</span>
                    <select onClick={(e)=>setEntry(e.target.value)}>
                        {entries.map((key,i)=><option key={i}>{key}</option>)}
                    </select>
                </div>
                :null}
            </SearchForm>

    )
}