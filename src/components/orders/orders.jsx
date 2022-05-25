import './orders.css'

const OrderSection = ()=>{
    return <section className="orders_container">
                <div className="order_invite-container order_section-containers">
                    <h3 className="order_heading">INVITES</h3>
                    <p>You have no invites</p>
                </div>
                <div className="order_recentpayment-container order_section-containers">
                    <h3 className="order_heading">RECENT PAYMENTS</h3>
                    <p>No Payment has been made. </p>
                </div>
                <div className="order_previousorders-container order_section-containers">
                    <h3 className="order_heading">PREVIOUS ORDERS</h3>
                    <p>You have created no order.</p>
                </div>
            </section>
}

export default OrderSection