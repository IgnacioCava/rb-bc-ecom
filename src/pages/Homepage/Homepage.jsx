import ProductsHolder from '../../components/ProductsHolder/ProductsHolder'
import { useContext } from "react";
import { AppContext } from '../../Store';
import { Home } from './HomepageStyled'

export default function Homepage(){

    const {state} = useContext(AppContext)

    return (
        <Home>
            <h1>Homepage</h1>
            <ProductsHolder products={state}/>
        </Home>
    )
}

