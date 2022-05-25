import './App.css';
import Profile from './components/Profile-section/Profile'
import Dashboard from './components/dashboard-section/dashboard';
import OrderSection from './components/orders/orders'

function App() {
  return (
    <div className='container'>
      <Profile />
      <Dashboard />
      <OrderSection />
    </div> 
  );
}

export default App;
