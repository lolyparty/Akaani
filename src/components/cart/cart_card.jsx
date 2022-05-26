import './cart.css';

const CartCardItem = ({imgsrc, itemName, itemAmount, itemUsers, selectedWeight})=>{
    return <div className="cart_card-container">
    <div className="cart_item-details">
        <img src={imgsrc} alt="cart Item(coconut)" />
        <div className="dashboard_card-details cart_card-details">
            <p className="dashboard_card-name">{itemName}</p>
            <p className="dashboard_card-amount">{`$${itemAmount}`}</p> 
        </div>
        <select>
            <option selected={selectedWeight === 1}>1 Kg</option>
            <option selected={selectedWeight === 2}>2 Kg</option>
            <option selected={selectedWeight === 3}>3 Kg</option>
            <option selected={selectedWeight === 4}>4 kg</option>
        </select>
    </div>
    <div className="cart_item-users">
            {itemUsers.map(e=>{return <div className="cart_user-container" style={{background:`${e.color}`}}><p className="cart_user">{e.name}</p></div>})}
    </div>
</div>
}

export default CartCardItem