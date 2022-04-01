import styled from 'styled-components';

export const ProductForm = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 30%;
        margin:auto;
    }
`

export const Creation = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    form{
        height: 90%;
        width: 40%;
        overflow:auto;
        ::-webkit-scrollbar{
            display:none;
        }
    }
`

export const Preview = styled.div`
    width: 40%;
    height: 90%;
`