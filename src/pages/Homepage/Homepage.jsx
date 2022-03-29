import ProductCard from '../../components/CardSchemas/ProductCard'
import styled from 'styled-components'
import ProductsHolder from '../../components/ProductsHolder/ProductsHolder'
import { useContext } from "react";
import { AppContext } from '../../App';

export default function Homepage(){

    const {state, dispatch} = useContext(AppContext)

    return (
        <Home>
            <h1>Homepage</h1>
            <ProductsHolder products={state}/>
        </Home>
    )
}

const Home = styled.div`

`