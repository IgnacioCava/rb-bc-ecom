import { Link } from "react-router-dom"
import { useState, useEffect, createRef } from "react";
import arrow from '../../../../assets/images/arrow.png'
import hightlightSelectedOption from "../../../../helpers/hightlightSelectedOption";
import { SidebarWrapper, Side, Widget, Options} from "./SidebarStyled";

export default function Sidebar(){

    const [page, setPage] = useState(window.location.pathname);
    const [open, setOpen] = useState(true);

    const optionsRef = [createRef(), createRef()]

    useEffect(()=>{
        hightlightSelectedOption(optionsRef.map(e=>e.current), 'pathname', page, 'white')
    },[page])

    // useEffect(()=>{
    //     hightlightSelectedOption('options', 'pathname', page, '#ffffff')
    // },[page])

    return (
        <SidebarWrapper open={open}>
            <Side open={open}>
                <h2>Options</h2>
                <Options>
                    <Link to='products' ref={optionsRef[0]} onClick={e=>{
                        setPage(e.target.pathname)
                    }}>
                        Product List
                    </Link>
                    <Link to='addproduct' ref={optionsRef[1]} onClick={e=>{
                        setPage(e.target.pathname)
                        }}>
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