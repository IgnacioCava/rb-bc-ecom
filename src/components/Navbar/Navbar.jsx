import { Link } from "react-router-dom"
import { Links, Nav } from './NavbarStyled'

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