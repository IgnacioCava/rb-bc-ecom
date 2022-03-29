import ProductCard from "../CardSchemas/ProductCard"
import styled from "styled-components"
import { useEffect, useState } from "react"
import autoWheelScroll from "../../helpers/autoWheelScroll"
import Searchbar from "../Searchbar/Searchbar"

export default function ProductHolder({products, admin}){

    const [scrollType, setType] = useState('page')
    const [search, setSearch] = useState('')

    console.log(search)

    useEffect(()=>{
        Array.from(document.getElementsByClassName('scrolltype')).map(button=>button.innerText.toLowerCase()===scrollType?button.style.backgroundColor='lightgrey':button.style.backgroundColor='transparent')
    }, [scrollType])

    return (
        <SectionWrapper>
            <Controls>
                <span>Scroll by: 
                    {['Page', 'Product'].map(type =>
                    <Scrolls 
                        type='button'
                        className="scrolltype" 
                        onClick={()=>setType(type.toLowerCase())}>
                        {type}
                    </Scrolls>
                    )}
                </span>
                <Searchbar search={setSearch}/>
            </Controls>
            
            <Holder id='holder' onWheel={(e)=>{autoWheelScroll(e, 'holder', 'x', scrollType)}}>
                {products.filter(e=>(search?e.title.includes(search):e)&&(admin?e:e.disabled===false)).map(product => {
                    return (
                        <ProductCard 
                            admin={admin} 
                            product={product}
                            key={product.id} 
                        />
                    )
                })}
            </Holder>
        </SectionWrapper>
        
    )
}

const Holder = styled.div`
    display: inline-flex;
    overflow: hidden;
    scroll-snap-type: x mandatory;
    scroll-snap-stop:always;
    scroll-behavior: smooth;
`

const Scrolls = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    transition: .4s;
    cursor:pointer;
`

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:80%;
    margin: auto;
    background-color: white;
    padding:10px;
    span{
        text-align: start;
        display: flex;
        align-items: flex-start;
        gap:10px;
    }
`

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`