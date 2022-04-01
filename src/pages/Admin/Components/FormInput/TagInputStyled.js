import styled from "styled-components";

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:5px;
`

export const Tag = styled.div`
    display: flex;
    background-color: white;
    padding:5px;
    gap:5px;
    border-radius: 5px;
    border: 1px solid #919191;
    transition: .7s cubic-bezier(0.09, 0.96, 0.45, 1.02);
    cursor: default;
    user-select: none;
    button{
        background-color: red;
        color: white;
        border: none;
        border-radius: 20%;
        font-weight: bold;
        cursor: pointer;
    }
`

export const TagsWrapper = styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
`