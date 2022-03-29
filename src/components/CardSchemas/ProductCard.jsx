import { Link } from "react-router-dom"
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import styled from "styled-components"
import noImage from "../../assets/images/defaultProductImage.png"

export default function ProductCard({product, admin}){

    const {dispatch} = useContext(AppContext)

    useEffect(()=>{

    },[product.disabled])

    function thousandsFormat(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    return (
        <Card className='wrapper'>
            <Wrapper>
                {admin
                ?<Options>
                    <Toggle toggled={product.disabled} onClick={()=>dispatch({type:'toggleProduct', id:product.id})}>{product.disabled?'Disabled':'Enabled'}</Toggle>
                    <Link to={`edit/${product.id}`}>
                        <Toggle>Edit</Toggle>
                    </Link>
                </Options>
                :null}
                <Image src={product?.image||noImage} alt="noImage" onError={e=>e.target.src=noImage}/>
                <hr/>
                <Data>
                    <Price>{(product.price&&'$'+thousandsFormat(product.price))||'Price'}</Price>
                    <hr/>
                    <Title>{product.title||'Title'}</Title>
                    <Description>{product.description||'Description'}</Description>
                </Data>
                
            </Wrapper>
        </Card>
    )
}

const Card = styled.div`
    min-width: 25%;
    max-width: 25%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: center;
    align-items: center;
    padding:20px;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
    hr{
        margin:0;
        border:1px solid #e9e9e9;
        border-width: 1px 0;
        width: 100%;
    }
`

const Image = styled.img`
    min-height: 50%;
    max-height: 60%;
    width: 100%;
    object-fit: cover;
`

const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    transition: .4s;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
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
    color:white;
    cursor:pointer;
`

const Options = styled.div`
    display: flex;
    width: 80%;
    margin:auto;
    padding:5px;
    justify-content: space-evenly;
`

const Title = styled.span`
    font-size: 1.1em;
    font-weight: 500;
`

const Price = styled.span`
    font-size: 1.5em;
    margin-bottom: 5px;
`

const Description = styled.span`
    font-size: 1em;
    color:grey;
`

const Data = styled.div`
    display: flex;
    flex-direction: column;
    padding:15px;
    box-sizing: border-box;
    align-items: flex-start;
    span{
        word-break: break-all;
    text-align: start;
    }
`