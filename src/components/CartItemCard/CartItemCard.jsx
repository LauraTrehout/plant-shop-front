import { Slide } from 'react-awesome-reveal'

import './CartItemCard.css'

const CartItemCard = ({ cartItem, removeFromCart }) => {
    return ( 
        <Slide direction="left" cascade>
        <div className='cart-card'>
            <img src={cartItem.image} alt={cartItem.name} />
            <p>{cartItem.count} x {cartItem.name} {cartItem.price} €</p>
        </div>
            <button className='remove' onClick={() => removeFromCart(cartItem)}>Remove</button>
        </Slide>
     );
}
 
export default CartItemCard;