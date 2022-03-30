import styled from 'styled-components';

export const ProductInput = styled.input`
    &::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance: none;}
`
    
export const ProductDesc = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
    resize:none;
`

export const Submit = styled.input`
    background-color:#6767ff !important;
    color:white;
    cursor:pointer;
`

export const InputHolder = styled.div`
    display: flex;
    flex-direction: column;
    padding:10px;
    box-sizing: border-box;
    align-items: flex-start;
    width: 100%;
    ${ProductDesc},${ProductInput},${Submit}{
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        transition: 1s;
        border:0;
        outline:0;
        background-color: white;
    }
`

export const Error = styled.span`
    color:red;
    font-size:14px;
    margin-top:5px;
    font-weight: bold;
`