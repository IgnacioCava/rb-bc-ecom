import { Link } from "react-router-dom"
import styled from "styled-components";
import { useState, useEffect } from "react";
import arrow from '../../../../assets/images/arrow.png'

export default function Sidebar(){

    const [open, setOpen] = useState(true);
    const [page, setPage] = useState(window.location.pathname);
    
    useEffect(()=>{
        Array.from(document.getElementsByClassName('options')).map(option=>option.pathname===page?option.classList.add('active'):option.classList.remove('active'))
    }, [page])

    return (
        <SidebarWrapper open={open}>
            <Side open={open}>
                <h2>Options</h2>
                <Options>
                    <Link to='products' className='options active' onClick={e=>{setPage(e.target.pathname)}}>
                        Product List
                    </Link>
                    <Link to='addproduct' className='options' onClick={e=>{setPage(e.target.pathname)}}>
                        Add Product
                    </Link>
                </Options>
            </Side>
            <Widget open={open} onClick={()=>setOpen(!open)}>
                <img open={open}  src={arrow} alt='toggle'/>
            </Widget>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
    display: flex;
    width: ${props => props.open ? '20%' : '0%'};
    &,*{transition: .5s ease-in-out;}
    height: 100%;
`

const Side = styled.div`
    width: ${props => props.open ? '100%' : '0%'};
    background-color: #b3d0ff;
    overflow: hidden;
    transition: .5s ease-in-out;
    
`

const Widget = styled.div`
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

const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .options{
        transition: .3s !important;
    }
    .active{
        background-color: #8282ff;
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


