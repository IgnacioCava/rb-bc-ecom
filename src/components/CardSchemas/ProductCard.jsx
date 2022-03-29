import { Link } from "react-router-dom"
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import styled from "styled-components"
import noImage from "../../assets/images/defaultProductImage.png"

export default function ProductCard({product, admin}){

    const {state, dispatch} = useContext(AppContext)

    useEffect(()=>{

    },[product.disabled])
    return (
        <Card>
            <Wrapper>
                <Image src={noImage} alt="noImage"/>
                <hr/>
                <Title>{product.title}</Title>
                {admin
                ?(<Options>
                <Toggle toggled={product.disabled} onClick={()=>dispatch({type:'toggleProduct', id:product.id})}>{product.disabled?'Disabled':'Enabled'}</Toggle>
                <Link to={`edit/${product.id}`}>
                    <Toggle>Edit</Toggle>
                </Link>
                </Options>)
                :null}
            </Wrapper>
        </Card>
    )
}

const Card = styled.div`
    min-width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: center;
    align-items: center;
    padding:20px;
    box-sizing: border-box;
    border-radius: 5px;
    hr{
        margin:0;
        border:1px solid #e9e9e9;
        border-width: 1px 0;
        width: 100%;
    }
`

const Image = styled.img`
    width: 100%;
`

const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    transition: .4s;
    &:hover{
        transform: scale(105%);
        box-shadow: 1px 6px 10px 2px rgb(0 0 0 / 50%);
    }
`

const Toggle = styled.button`
    background-color: #fff;
    border: none;
    background-color: ${props=>props.toggled? '#f44336':'#4CAF50'};
    padding:5px;
    font-weight: bold;
    border-radius: 5px;
    margin-bottom:5px;
    color:white;
    cursor:pointer;
`

const Title = styled.h1`
    font-size:calc((25vw - 4.5rem) / 7);
`

const Options = styled.div`
    display: flex;
    width: 80%;
    margin:auto;
    justify-content: space-evenly;
`