import CartCardItem from './cart_card';
import CartBtn from '../cartBtn';
import leftArrow from '../../Img/Vector (28).svg';
import coconut from '../../Img/coconut.svg'
import './cart.css'

const Cart =({cartState, setCartState})=>{

    const closeCart = (e)=>{
        e.preventDefault();
        setCartState(false)
    }

    const users1 = [{name:'M', color:'#406767'}]

    const users2 = [{name:'R', color:'#3F4246'}]

    const users3 = [{name:'M',color:'#277292'}, {name:'P', color:'#D1B378'}]

    const users4 = [{name:'M', color:'#0A1E3D'}]

    return <div className={`cart_container ${!!cartState ? 'cart_open' : ''}`}>
                
                <div className="cart_content">
                    <CartBtn cartItems={4}/>
                    <div className="cart_heading">
                        <img src={leftArrow} alt="left arrow" onClick={closeCart} />
                        <h4>My Cart</h4>
                    </div>
                    <CartCardItem imgsrc={coconut} itemName={`Okazi Leaves`} itemAmount={30} itemUsers={users1}/>
                    <CartCardItem imgsrc={coconut} itemName={`Okazi Leaves`} itemAmount={120} itemUsers={users2} selectedWeight={4}/>
                    <CartCardItem imgsrc={coconut} itemName={`Rice Bean Lea...`} itemAmount={50} itemUsers={users3} />
                    <CartCardItem imgsrc={coconut} itemName={`Efo Stew Ingre...`} itemAmount={45} itemUsers={users4}/>
                    <div className="cart_checkout-container">
                        <div className="cart_total">
                            <p className="cart_total-text">TOTAL</p>
                            <p className="cart_total-amount">{`$${`2,560`}`}</p>
                        </div> 
                        <div className="cart_checkout-btn">
                            <button onClick={closeCart}>
                                DONE SHOPPING
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
}

export default Cart