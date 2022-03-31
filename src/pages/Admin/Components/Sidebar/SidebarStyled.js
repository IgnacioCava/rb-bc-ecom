import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    display: flex;
    width: ${props => props.open ? '20%' : '0%'};
    &,*{transition: .5s ease-in-out;}
    height: 100%;
    white-space: nowrap;
`

export const Side = styled.div`
    width: ${props => props.open ? '100%' : '0%'};
    background-color: #b3d0ff;
    overflow: hidden;
    transition: .5s ease-in-out;
    
`

export const Widget = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    position: absolute;
    cursor: pointer;
    img{
        width: 100%;
        transform: rotate(${props => props.open ? '0deg' : '180deg'});
    }
    overflow: hidden;
    padding:5px;
    box-sizing: border-box;
    transition: .5s ease-in-out;
    background-color: ${props => props.open ? '#8282ff' : '#c0c0ff'};
    border-radius: 0 0 10px 0;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .options{
        transition: .3s !important;
    }
    a{
        text-decoration: none;
        color:black;
        font-size: 1.2rem;
        width: 80%;
        padding: 10px;
        border-radius: 10px;
        line-height: 15px;
    }
`