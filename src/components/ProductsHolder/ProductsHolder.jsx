import ProductCard from "../CardSchemas/ProductCard"
import { useEffect, useState, useMemo } from "react"
import autoWheelScroll from "../../helpers/autoWheelScroll"
import Searchbar from "../Searchbar/Searchbar"
import hightlightSelectedOption from "../../helpers/hightlightSelectedOption"
import {Empty, Holder, Divisor, Scrolls, SectionWrapper, Controls} from './ProductsHolderStyled'

export default function ProductHolder({products, admin}){

    const [scrollType, setType] = useState('page')
    const [search, setSearch] = useState()

    useEffect(()=>{
        hightlightSelectedOption('scrolltype', 'innerText', scrollType, 'lightgrey')
    },[scrollType])

    const filteredProducts = useMemo(()=>{
        return products.filter(e=>(search?e.title.includes(search):e)&&(admin?e:e.disabled===false))
    }, [search, products, admin])

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
                <Searchbar search={setSearch}/>
            </Controls>
            
            <Holder id='holder' onWheel={(e)=>{if(e.target.className.includes('wrapper')) autoWheelScroll(e, 'holder', 'x', scrollType)}}>
                {filteredProducts.length?filteredProducts.map(product => {
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