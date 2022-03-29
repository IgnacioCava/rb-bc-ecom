import styled from "styled-components"
import {useEffect, useState} from "react"
import validateProductForm from "../../../../helpers/validateProductForm";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import FormInput from "../../Components/FormInput/FormInput";

export default function CreateProduct(){

    const {dispatch} = useContext(AppContext)

    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState({})

    const [productData, setProductData] = useState({})

    useEffect(()=>{
        if(Object.keys(productData).length) setErrors(validateProductForm(productData))
    },[productData])

    function handleSubmit(e){
        e.preventDefault();
        const validation = validateProductForm(productData);
        if(!validation) dispatch({type:'addProduct', productData})
        else setErrors(validation)
    }

    function handleInput(e){
        e.preventDefault();
        const {name, value} = e.target;
        setProductData({...productData, [name]: value})
        setErrors(validateProductForm(productData))
    }

    function flashError(e){
        let prev = e.target.style.backgroundColor||'transparent';
        if(Object.keys(errors).length){
            e.target.style.backgroundColor = 'red'
            setTimeout(()=>{e.target.style.backgroundColor = prev},1000)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Product</h1>
            <ProductForm>

                <FormInput name="title" type="text" placeholder="Title" error={errors} eventHandlers={{onChange:handleInput}}/>

                <FormInput name="description" area type="text" placeholder="Description" error={errors} eventHandlers={{
                        onChange:e=>{
                            handleInput(e)
                            e.target.style.height='auto'
                            e.target.style.height=e.target.scrollHeight+'px';
                            e.target.style.overflowY='hidden'
                }}}/>

                <FormInput name='price' type='number' placeholder='Price' error={errors} eventHandlers={{
                        onChange:e=>{
                            if(e.target.value<0)e.target.value=e.nativeEvent.data
                            e.target.value=e.target.valueAsNumber
                            handleInput(e)
                        },
                        onKeyPress:e=>{if(e.key==='-')e.target.value=''}
                }}/>

                <FormInput name='image' type='text' placeholder='Image URL' error={errors} eventHandlers={{
                        onChange:e=>{
                            document.getElementById('imagePreview').style.display = 'unset'
                            setImage(e.target.value)
                            handleInput(e)
                }}}/>

                <img src={image} id='imagePreview' alt="productImage" onChange={handleInput} onError={(e)=>e.target.style.display='none'}/>

                <FormInput type='submit' value='Create Product' eventHandlers={{onClick:flashError}}/>
            </ProductForm>
        </form>
    )
}

const ProductForm = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 30%;
        display: none;
        margin:auto;
    }
`