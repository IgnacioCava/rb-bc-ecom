import styled from 'styled-components';

export const SearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    overflow:hidden;
    box-shadow: ${props => props.focus ? '1px 3px 3px 2px #ccc' : '1px 2px 3px 1px #ccc'};
    transition: .5s;
    width: ${props => props.focus ? '30%' : '20%'};
    padding:${props => props.focus ? '10px' : '5px'};
    &:hover{
        box-shadow: 1px 3px 3px 2px #ccc;
    }
    div{
        display: flex;
        border-left: 1px solid grey;
        color: grey;
        select{
            border: 0;
            height: 100%;
            outline: none; 
            color: inherit;
        }
        span{
            
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13.3px;
            align-items: center;
            padding-left:5px;
        }
    }
    
`

export const SearchInput = styled.input`
    outline: none;
    width: 100%;
    border:0;
    transition: .25s ease-in;
`