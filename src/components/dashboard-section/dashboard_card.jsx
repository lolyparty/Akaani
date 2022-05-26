import './dashboard.css';

const DashboardCard = ({imgSrc, cardName, cardAmount, background, order})=>{

    
    return <div className="dashboard_card" style={{order:`${order}`}}>
                <div className="dashboard_card-img-container" style={{background:`${background}`}}>
                    <img className="dashboard_card-img" src={imgSrc} alt="" />
                </div>
                <div className="dashboard_card-details">
                    <p className="dashboard_card-name">{cardName}</p>
                    <p className="dashboard_card-amount">{cardAmount}</p> 
                </div>
            </div>
}

export default DashboardCard