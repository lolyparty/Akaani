import { useState } from 'react';
import Profile from './components/Profile-section/Profile'
import Dashboard from './components/dashboard-section/dashboard';
import OrderSection from './components/orders/orders';
import Cart from './components/cart/cart';
import './App.css';

function App() {
  const [cartState, setCartState] = useState(false) 

  return (
    <div className='container'>
      <Cart cartState={cartState} setCartState={setCartState}/>
      <Profile />
      <Dashboard cartState={cartState} setCartState={setCartState}/>
      <OrderSection />
    </div> 
  );
}

export default App;