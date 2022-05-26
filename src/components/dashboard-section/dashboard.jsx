import { useState } from 'react';
import CartBtn from '../cartBtn';
import DashboardCard from './dashboard_card';
import truck from '../../Img/truck.svg';
import creditCard from '../../Img/creditcard.svg';
import gift from '../../Img/gift.svg';
import shop from '../../Img/shop.svg'
import baskets from '../../Img/shop2.svg'
import './dashboard.css';

const Dashboard = ({cartState, setCartState})=>{

    const inTransitJobs = 0
    const totalPaid = 0.00.toFixed(2)
    const completedJobs = 0
    const cartItems = 4
    const basketNumber = 0

    const [search, setSearch] = useState('')

    const [activeTab, setActiveTab] = useState('Paid')

    

    const searchItem = (e) =>{
        setSearch(e.target.value)
    }

    const submitSearch = (e)=>{
        e.preventDefault()
        setSearch("")
    }

    const showPaid = (e)=>{
        e.preventDefault()
        setActiveTab('Paid')
    }

    const showPending = (e)=>{
        e.preventDefault()
        setActiveTab('Pending')
    }

    const showCompleted = (e)=>{
        e.preventDefault()
        setActiveTab('Completed')
    }

    const openCart =(e)=>{
        e.preventDefault()
        setCartState(true)
    }

    

    return <section className="dashbaord_container">
        <div className="greeting_search-container">
            <h1 className="dashboard_greeting">Good Evening, Laura!</h1>
            <form onSubmit={submitSearch}>
                <label className="search_label" htmlFor="search">Search basket</label>
                <input className="dashboard_input" placeholder="Search Basket" value={search} id="search" onChange={searchItem}/>
            </form>
        </div>
        <div className="dashboard_cards-container">
            {cartState && <DashboardCard imgSrc={baskets} cardName={`Total baskets`} cardAmount={basketNumber} background={'#DA853933'} />}
            <DashboardCard imgSrc={truck} cardName={`In-Transit Jobs`} cardAmount={inTransitJobs} background={'#5E7ED233'} order={cartState ? 4 : 0}/>
            <DashboardCard imgSrc={creditCard} cardName={`Total Paid`} cardAmount={`$${totalPaid}`} background={'#56B1A033'} />
            <DashboardCard imgSrc={gift} cardName={`Completed Jobs`} cardAmount={completedJobs} background={'#868DB533'} />
            
        </div>
        <div className="dashboard_basket-container">
            <h2 className="dashboard_basket-heading">Baskets</h2>
            <button className="dashboard_newbasket-button">Create Basket</button>
        </div>
        <div className="dashboard_basket-state">
            <button className={`dashboard_basket-statebtn ${activeTab === 'Paid' ? 'active_statebtn' : null}`} onClick={showPaid}>Paid</button>
            <button className={`dashboard_basket-statebtn ${activeTab === 'Pending' ? 'active_statebtn' : null}`} onClick={showPending}>Pending</button>
            <button className={`dashboard_basket-statebtn ${activeTab === 'Completed' ? 'active_statebtn' : null}`} onClick={showCompleted}>Completed</button>
        </div>
        <div className="dashboard_basket-details">
            <div className="dashboard_basket-detailscontainer">
                <div className="dashboard_basket-detailsImg">
                        <img className="dashboard_card-img" src={shop} alt="" />
                </div>
                <p>{`No ${activeTab} Baskets, yet!`}</p>
            </div>
        </div>
        <CartBtn cartItems={cartItems} openCart={openCart}/>
    </section>
}

export default Dashboard 