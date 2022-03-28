import { Link } from "react-router-dom"
import styled from "styled-components"
import noImage from "../../assets/images/defaultProductImage.png"

export default function ProductCard({title}){
    return (
        <Card>
            <Wrapper>
                <Image src={noImage} alt="noImage"/>
                <hr/>
                <h1>{title}</h1>
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
        width: 100%;
    }
`

const Image = styled.img`
width: 100%;
`

const Wrapper = styled.div`
background-color: #fff;
width: 100%;
`