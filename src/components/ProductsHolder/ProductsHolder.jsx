import ProductCard from "../CardSchemas/ProductCard"
import { useEffect, useState } from "react"
import autoWheelScroll from "../../helpers/autoWheelScroll"
import Searchbar from "../Searchbar/Searchbar"
import hightlightSelectedOption from "../../helpers/hightlightSelectedOption"
import {Empty, Holder, Divisor, Scrolls, SectionWrapper, Controls} from './ProductsHolderStyled'

export default function ProductHolder({products, admin}){

    const [scrollType, setType] = useState('page')
    const [searched, setSearch] = useState(admin?products:products.filter(e=>!e.disabled))

    useEffect(()=>{
        hightlightSelectedOption('scrolltype', 'innerText', scrollType, 'lightgrey')
    },[scrollType])

    return (
        <SectionWrapper>
            <Controls>
                <span>Scroll by: 
                    {['Page', 'Product'].map(type =>
                    <Scrolls 
                        type='button'
                        className="scrolltype"
                        key={type}
                        onClick={()=>setType(type.toLowerCase())}
                    >
                        {type}
                    </Scrolls>
                    )}
                </span>
                <Searchbar elements={products} onSearch={setSearch} conditions={admin??{disabled: false}} restrictions={admin?[]:['id','disabled','image']}/>
            </Controls>
            
            <Holder id='holder' onWheel={(e)=>{if(e.target.className.includes('wrapper')) autoWheelScroll(e, 'holder', 'x', scrollType)}}>
                {searched.length?searched.map(product => {
                    return (
                        <Divisor className="wrapper" key={product.id}>
                            <ProductCard
                                id={product.id}
                                admin={admin} 
                                product={product}  
                            />
                        </Divisor>
                    )
                }):<Empty>No products found</Empty>}
            </Holder>
        </SectionWrapper>
    )
}