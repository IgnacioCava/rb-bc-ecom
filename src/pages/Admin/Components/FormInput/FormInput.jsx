import {ProductInput, ProductDesc, Submit, InputHolder, Error} from './FormInputStyled'
import TagInput from './TagInput'

export default function FormInput(props){
    let {name, type, placeholder, error, eventHandlers, area, tags, text} = props
    const data = {name, type, value:text, placeholder, ...eventHandlers, error}

    return (
        <InputHolder>
            {type==='submit'
                ?<Submit type={type} value={text} {...eventHandlers}/>
                :<>
                    <label htmlFor={name}>{name.charAt(0).toUpperCase()+name.substring(1)}</label>
                    {tags
                    ?<TagInput name='tags' placeholder='Press enter to add tags, or backspace to remove them' passTags={eventHandlers.onChange}/>
                    :area
                        ?<ProductDesc {...data} />
                        :<ProductInput {...data}/>}
                    <Error>{error?error[name]:null}</Error>
                </>
            }
        </InputHolder>
    )
}