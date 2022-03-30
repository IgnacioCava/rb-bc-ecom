import {ProductInput, ProductDesc, Submit, InputHolder, Error} from './FormInputStyled'

export default function FormInput(props){
    const {name, type, placeholder, error, eventHandlers, area, text} = props
    let data = {name, type, value:text, placeholder, ...eventHandlers, error}

    return (
        <InputHolder>
            {type==='submit'
                ?<Submit type={type} value={text} {...eventHandlers}/>
                :<>
                    <label htmlFor={name}>{placeholder}</label>
                    {area
                        ?<ProductDesc {...data}/>
                        :<ProductInput error={error} {...data}/>}
                    <Error>{error[name]}</Error>
                </>
            }
        </InputHolder>
    )
}