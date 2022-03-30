import {useEffect, useState} from "react"
import validateProductForm from "../../../../helpers/validateProductForm";
import { useContext } from "react";
import { AppContext } from "../../../../Store";
import FormInput from "../../Components/FormInput/FormInput";
import ProductCard from "../../../../components/CardSchemas/ProductCard";
import { ProductForm, Creation, Preview } from './CreateProductStyled'

export default function CreateProduct({action, product}){

    const {dispatch} = useContext(AppContext)
    
    const [errors, setErrors] = useState({})
    const [productData, setProductData] = useState(product||{})

    useEffect(()=>{
        if(Object.keys(productData).length) setErrors(validateProductForm(productData))
    },[productData])

    function handleSubmit(e){
        e.preventDefault();
        const validation = validateProductForm(productData);
        if(!validation) {
            dispatch({type:action==='edit'?'editProduct':'addProduct', productData})
            alert('Product '+(action==='edit'?'edited':'added'))
        }
        else {setErrors(validation)}
    }

    function handleInput(e){
        e.preventDefault();
        const {name, value} = e.target;
        setProductData({...productData, [name]: value})
        setErrors(validateProductForm(productData))
    }

    function flashError(e){
        let prev = e.target.style.backgroundColor;
        if(Object.keys(errors).length){
            e.target.style.backgroundColor = 'red'
            setTimeout(()=>{e.target.style.backgroundColor = prev},1000)
        }
    }

    return (
        <Creation>
            <Preview>
                <ProductCard product={productData}/>
            </Preview>
            <form onSubmit={handleSubmit}>
                <h1>{product?'Edit':'Create'} Product</h1>
                <ProductForm>

                    <FormInput name="title" type="text" placeholder="Title" error={errors} text={productData.title} eventHandlers={{onChange:handleInput}}/>

                    <FormInput name="description" area type="text" placeholder="Description" text={productData.description} error={errors} eventHandlers={{
                            onChange:e=>{
                                handleInput(e)
                                e.target.style.height='auto'
                                e.target.style.height=e.target.scrollHeight+'px';
                                e.target.style.overflowY='hidden'
                    }}}/>

                    <FormInput name='price' type='number' placeholder='Price' text={productData.price} error={errors} eventHandlers={{
                            onChange:e=>{
                                if(e.target.value<0)e.target.value=e.nativeEvent.data
                                e.target.value=e.target.valueAsNumber
                                handleInput(e)
                            },
                            onKeyPress:e=>{if(e.key==='-')e.target.value=''}
                    }}/>

                    <FormInput name='image' type='text' placeholder='Image URL' text={productData.image} error={errors} eventHandlers={{onChange:handleInput}}/>

                    <FormInput type='submit' text={(product?'Edit':'Create')+' Product'} eventHandlers={{onClick:flashError}}/>
                </ProductForm>
            </form>
        </Creation>
    )
}
