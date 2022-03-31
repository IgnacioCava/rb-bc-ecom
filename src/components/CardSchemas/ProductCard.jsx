import { Link } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "../../Store";
import noImage from "../../assets/images/defaultProductImage.png"
import priceFormat from "../../helpers/priceFormat";
import { Image, Card, Toggle, Options, Title, Price, Description, Data } from './ProductCardStyled'

export default function ProductCard({product, admin}){

    const {dispatch} = useContext(AppContext)

    return (
        <Card>
                {admin
                ?<Options>
                    <Toggle toggled={product.disabled} onClick={()=>dispatch({type:'toggleProduct', id:product.id})}>{product.disabled?'Disabled':'Enabled'}</Toggle>
                    <Link to={`edit/${product.id}`}>
                        <Toggle>Edit</Toggle>
                    </Link>
                </Options>
                :null}
                <Image src={product?.image||noImage} alt="noImage" onError={e=>e.target.src=noImage}/>
                <hr/>
                <Data>
                    <Price>{(product.price&&'$'+priceFormat(product.price))||'Price'}</Price>
                    <hr/>
                    <Title>{product.title||'Title'}</Title>
                    <Description>{product.description||'Description'}</Description>
                </Data>
        </Card>
    )
}