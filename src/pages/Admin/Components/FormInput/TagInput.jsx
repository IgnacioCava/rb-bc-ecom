import { useEffect, useState, createRef, useMemo } from "react"
import { ProductInput } from "./FormInputStyled"
import { Tag, TagList, TagsWrapper } from "./TagInputStyled"

export default function TagInput({name, placeholder, passTags}) {

    const [tags, setTag] = useState([])
    const tagRef = useMemo(() => tags.map(createRef), [tags])

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
            const tagElement = tagRef.find(el=>el.current.children[1].innerText===tag).current.style
            tagElement.backgroundColor='#ff4d4d'
            setTimeout(()=>{tagElement.backgroundColor=''},1000)
        }
    }

    function removeTag(e){
        setTag(tags.filter(tag=>tag!==e))
    }

    return (
        <TagsWrapper>
            <TagList>
                {tags.map((tag,i)=>(
                    <Tag key={i} ref={tagRef[i]}>
                        <button onClick={()=>removeTag(tag)}>X</button>
                        <span>{tag}</span>
                    </Tag>
                ))}
            </TagList>
            <ProductInput name={name} placeholder={placeholder} type='text' onKeyDown={addTag}/>
        </TagsWrapper>
    )
}