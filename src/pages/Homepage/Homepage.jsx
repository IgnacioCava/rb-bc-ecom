import ProductCard from '../../components/CardSchemas/ProductCard'
import styled from 'styled-components'
import ProductsHolder from '../../components/ProductsHolder/ProductsHolder'

export default function Homepage(){
    return (
        <Home>
            <h1>Homepage</h1>
            <ProductsHolder products={[0,1,2,3,4,5,6,7,8,9,10,11]}/>
        </Home>
    )
}

const Home = styled.div`

`