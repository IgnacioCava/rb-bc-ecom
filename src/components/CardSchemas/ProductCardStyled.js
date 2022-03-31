import styled from "styled-components"

export const Image = styled.img`
    min-height: 50%;
    max-height: 60%;
    width: 100%;
    object-fit: cover;
`

export const Card = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    transition: .4s;
    overflow: auto;
    hr{
        margin:0;
        border:1px solid #e9e9e9;
        border-width: 1px 0;
        width: 100%;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    &:hover{
        transform: scale(105%);
        box-shadow: 1px 6px 10px 2px rgb(0 0 0 / 50%);
    }
`

export const Toggle = styled.button`
    background-color: #fff;
    border: none;
    background-color: ${props=>props.toggled? '#f44336':'#4CAF50'};
    padding:5px;
    font-weight: bold;
    border-radius: 5px;
    color:white;
    cursor:pointer;
`

export const Options = styled.div`
    display: flex;
    width: 80%;
    margin:auto;
    padding:5px;
    justify-content: space-evenly;
`

export const Title = styled.span`
    font-size: 1.1em;
    font-weight: 500;
`

export const Price = styled.span`
    font-size: 1.5em;
    margin-bottom: 5px;
`

export const Description = styled.span`
    font-size: 1em;
    color:grey;
`

export const Data = styled.div`
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