import styled from 'styled-components';

export const Empty = styled.h1`
    text-align: center;
    width: 100%;
`

export const Holder = styled.div`
    display: inline-flex;
    overflow: hidden;
    scroll-behavior: smooth;
    height: 100%;
`

export const Divisor = styled.div`
    min-width: 25%;
    max-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: center;
    align-items: center;
    padding:20px;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
`

export const Scrolls = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    transition: .4s;
    cursor:pointer;
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:80%;
    background-color: white;
    padding:10px;
    margin:10px;
    height: 80%;
    span{
        text-align: start;
        display: flex;
        align-items: flex-start;
        gap:10px;
    }
`

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`