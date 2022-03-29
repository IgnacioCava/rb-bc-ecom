import styled from "styled-components"
import {useEffect, useState} from "react"
import validateProductForm from "../../../../helpers/validateProductForm";

export default function CreateProduct(){

    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState({})

    const [productData, setProductData] = useState({})

    useEffect(()=>{
        if(Object.keys(productData).length) setErrors(validateProductForm(productData))
    },[productData])

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const product = {
            title: formData.get("title"),
            price: formData.get("price"),
            description: formData.get("description"),
            image: formData.get("image")
        }
        const validation = validateProductForm(product);
        console.log(validation)
        if(!validation) {/*dispatch(uploadProduct)*/}
        else setErrors(validation)
    }

    function handleInput(event){
        console.log(errors)
        event.preventDefault();
        const {name, value} = event.target;
        console.log(event)
        setProductData({...productData, [name]: value})
        setErrors(validateProductForm(productData))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Product</h1>
            <ProductForm>

                <InputHolder>
                    <label htmlFor="title">Title</label>
                    <ProductInput name='title' type='text' placeholder='Title' onChange={handleInput}/>
                    <Error>{errors.title}</Error>
                </InputHolder>

                <InputHolder>
                    <label htmlFor="description">Description</label>
                    <ProductDesc name='description' type='text' placeholder='Description' onChange={(e)=>{
                        handleInput(e)
                        e.target.style.height='auto'
                        e.target.style.height=e.target.scrollHeight+'px';
                        e.target.style.overflowY='hidden'
                    }}/>
                    <Error>{errors.description}</Error>
                </InputHolder>

                <InputHolder>
                    <label htmlFor="price">Price</label>
                    <ProductInput name='price' type='number' placeholder='Price' onChange={(e)=>{
                        if(e.target.value<0)e.target.value=e.nativeEvent.data
                        e.target.value=e.target.valueAsNumber
                        handleInput(e)
                        }} 
                        onKeyPress={e=>e.key==='-'?e.target.value='':null}
                    />
                    <Error>{errors.price}</Error>
                </InputHolder>
                
                <InputHolder>
                    <label htmlFor="image">Image</label>
                    <ProductInput name='image' type='text' placeholder='Image URL' onChange={(e)=>{
                            document.getElementById('imagePreview').style.display = 'unset'
                            setImage(e.target.value)
                            handleInput(e)
                        }
                    }/>
                    <Error>{errors.image}</Error>
                </InputHolder>

                <img src={image} id='imagePreview' alt="productImage" onChange={handleInput} onError={(e)=>e.target.style.display='none'}/>
                <InputHolder>
                    <ProductInput type='submit' value='Create Product'/>
                </InputHolder>
            </ProductForm>

        </form>
    )
}

const InputHolder = styled.div`
display: flex;
flex-direction: column;
padding:10px;
box-sizing: border-box;
align-items: flex-start;
width: 100%;
`

const Error=styled.span`
    color:red;
    font-size:14px;
    margin-top:5px;
    font-weight: bold;
`

const ProductForm = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 30%;
        display: none;
        margin:auto;
    }
`

const ProductInput = styled.input`
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
`

const ProductDesc = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
    resize:none;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
`