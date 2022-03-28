import ProductCard from "../CardSchemas/ProductCard"
import styled from "styled-components"
import { useEffect } from "react"
import autoWheelScroll from "../../helpers/autoWheelScroll"

export default function ProductHolder({products}){

    return (
        <Holder id='holder' onWheel={(e)=>{autoWheelScroll(e, 'holder', 'x', 'page')}
        }>
            {products.map(product => {
                return (
                    <ProductCard title={product} key={product.id}/>
                )
            })}
        </Holder>
    )
}

const Holder = styled.div`
display: inline-flex;
width:80%;
overflow: hidden;
scroll-snap-type: x mandatory;
scroll-snap-stop:always;
scroll-behavior: smooth;
`