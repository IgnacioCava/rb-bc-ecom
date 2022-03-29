import { Link } from "react-router-dom"
import styled from "styled-components";
import { useState } from "react";
import arrow from '../../../../assets/images/arrow.png'

export default function Sidebar(){

    const [open, setOpen] = useState(true);

    return (
        <SidebarWrapper open={open}>
            <Side open={open}>
                <h2>Options</h2>
                <div>
                    <Link to='products'>
                        <button>Product List</button>
                    </Link>
                    <Link to='addproduct'>
                        <button>Add Product</button>
                    </Link>
                </div>
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
    background-color: #c0c0ff;
    overflow: hidden;
    transition: .5s ease-in-out;
    
`

const Widget = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    position: absolute;
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



