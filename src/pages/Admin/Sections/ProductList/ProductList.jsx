import styled from "styled-components"
import {useEffect, useState} from "react"
import { useContext } from "react";
import { AppContext } from "../../../../App";
import ProductsHolder from "../../../../components/ProductsHolder/ProductsHolder";

export default function ProductList(){

    const {state, dispatch} = useContext(AppContext)

    return (
        <List>
            <ProductsHolder products={state} admin/>
        </List>
    )
}

const List = styled.div`
    margin-top:5%
`