import { useEffect, useState } from "react"
import { ProductInput } from "./FormInputStyled"
import { Tag, TagList, TagsWrapper } from "./TagInputStyled"

export default function TagInput({name, placeholder, passTags}) {

    const [tags, setTag] = useState([])

    useEffect(()=>{
        passTags({name, value:tags})
    },[tags])

    function formattedTag(tag) {
        tag = tag.trim()
        return tag.charAt(0).toUpperCase() + tag.substring(1)
    }

    function addTag(e){
        const tag = formattedTag(e.target.value)
        if(!tag) return

        if(!tags.includes(tag) && e.key==='Enter') {
            setTag([...tags, tag])
            e.target.value=''
        } 

        if(tags.includes(tag) && e.key==='Enter'){
            const input = document.getElementById(tag)
            input.style.backgroundColor='#ff4d4d'
            setTimeout(()=>{input.style.backgroundColor=''},1000)
        }
    }

    function removeTag(e){
        setTag(tags.filter(tag=>tag!==e))
    }

    return (
        <TagsWrapper>
            <TagList>
                {tags.map((tag,i)=>(
                    <Tag key={i} id={tag}>
                        <button onClick={()=>removeTag(tag)}>X</button>
                        <span>{tag}</span>
                    </Tag>
                ))}
            </TagList>
            <ProductInput name={name} placeholder={placeholder} type='text' onKeyDown={addTag}/>
        </TagsWrapper>
    )
}