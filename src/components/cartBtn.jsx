import cart from '../Img/shopping basket icon (1).svg'
import './cartBtn.css';

const CartBtn = ({openCart, cartItems})=>{
    return  <button className="cart_btn" onClick={openCart}>
                <img src={cart} alt="open cart" /> 
                <p className="cart_items-number">{cartItems}</p>
            </button>
}

export default CartBtn