import './CartItemCard.css'

const CartItemCard = ({ cartItem, removeFromCart }) => {
    return ( 
        <div className='cart-card'>
            <img src={cartItem.image} alt={cartItem.name} />
            <p>{cartItem.count} x {cartItem.name} {cartItem.price} €</p>
            <button className='remove' onClick={() => removeFromCart(cartItem)}>Remove</button>
        </div>
     );
}
 
export default CartItemCard;