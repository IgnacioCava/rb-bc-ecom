import {useEffect, useState} from "react"
import { useContext } from "react";
import { AppContext } from "../../../../Store";
import FormInput from "../../Components/FormInput/FormInput";
import ProductCard from "../../../../components/CardSchemas/ProductCard";
import { ProductForm, Creation, Preview } from './CreateProductStyled'
import validateProductForm from "../../../../helpers/validateProductForm";
import adjustHeightToContent from "../../../../helpers/adjustHeightToContent";

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

    function handleTags(e){
        setProductData({...productData, [e.name]: e.value})
        setErrors(validateProductForm(productData))
    }

    return (
        <Creation>
            <Preview>
                <ProductCard product={productData}/>
            </Preview>
            <form onSubmit={handleSubmit}>
                <h1>{product?'Edit':'Create'} Product</h1>
                <ProductForm>

                <input type="submit" disabled style={{display: 'none'}} aria-hidden="true"/>
                {/* Cheap way of preventing form submission when enter key is pressed on another input. 

                Section 4.10.22.2 Implicit submission of the W3C HTML5 spec says:

                A form element's default button is the first submit button in tree order whose form owner is that form element.
                If the user agent supports letting the user submit a form implicitly (for example, on some platforms hitting the "enter" key while a text field is focused implicitly submits the form), 
                then doing so for a form whose default button has a defined activation behavior must cause the user agent to run synthetic click activation steps on that default button.
                Consequently, if the default button is disabled, the form is not submitted when such an implicit submission mechanism is used. (A button has no activation behavior when disabled.)
                */}

                    <FormInput name="title" type="text" placeholder="Title" error={errors} text={productData.title} eventHandlers={{onChange:handleInput}}/>

                    <FormInput name="description" area type="text" placeholder="Description" text={productData.description} error={errors} eventHandlers={{
                            onChange:e=>{
                                handleInput(e)
                                adjustHeightToContent(e)
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

                    <FormInput tags name='categories' placeholder='Press enter to add tag' error={errors} eventHandlers={{onChange:handleTags}}/>

                    <FormInput type='submit' text={(product?'Edit':'Create')+' Product'}/>
                </ProductForm>
            </form>
        </Creation>
    )
}
