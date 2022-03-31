import { useContext } from "react";
import { AppContext } from "../../../../Store";
import ProductsHolder from "../../../../components/ProductsHolder/ProductsHolder";
import { List } from "./ProductListStyled";
export default function ProductList(){

    const {state} = useContext(AppContext)

    return (
        <List>
            <ProductsHolder products={state} admin/>
        </List>
    )
}