import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Navbar(){
    return (
        <Nav>
            <h1>E-commerce</h1>
            <Links>
                    <Link to='/'>Home</Link>
                    <Link to='/admin/products'>Admin panel</Link>
            </Links>
        </Nav>
    )
}

const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap:1rem;
    font-weight: bold;
    a{
        color:white !important;
        text-decoration: none;
    }
`

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    color:white;
    background-color: #0396ff;
    height: 10%;
`

