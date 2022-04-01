import { Tag, TagList } from "../../pages/Admin/Components/FormInput/TagInputStyled"

export default function TagMapper({tags, action}) {

    if(tags) return (
        <TagList>
        {tags.map(tag=>(
            <Tag key={tag}>
                {action?<button onClick={()=>action(tag)}>X</button>:null}
                {tag}
            </Tag>
        ))}
        </TagList>
    ) 
    else return null
}