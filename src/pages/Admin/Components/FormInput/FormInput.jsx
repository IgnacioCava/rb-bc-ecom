import styled from "styled-components"

export default function FormInput(props){
    const {name, type, placeholder, error, eventHandlers, area} = props
    let data = {name, type, placeholder, ...eventHandlers}
    return (
        <InputHolder>
            {type==='submit'
                ?<ProductInput type={type} value='Create Product' {...eventHandlers}/>
                :<>
                    <label htmlFor={name}>{placeholder}</label>
                    {area
                        ?<ProductDesc {...data}/>
                        :<ProductInput {...data}/>}
                    <Error>{error[name]}</Error>
                </>
            }
        </InputHolder>
    )
}

const ProductInput = styled.input`
    &::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance: none;}
`
    
const ProductDesc = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
    resize:none;
`

const InputHolder = styled.div`
    display: flex;
    flex-direction: column;
    padding:10px;
    box-sizing: border-box;
    align-items: flex-start;
    width: 100%;
    ${ProductDesc},${ProductInput}{
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        transition: 1s;
    }
`

const Error=styled.span`
    color:red;
    font-size:14px;
    margin-top:5px;
    font-weight: bold;
`