import {useState} from 'react'
import './profile-section.css';
import logo from '../../Img/logo-svg.svg';
import userImg from '../../Img/User-icon.svg';
import baskets from '../../Img/shopping basket icon.svg'
import history from '../../Img/history-order.svg'
import logout from '../../Img/Vector (26).svg'

const Profile = ()=>{

    const [activeTab, setActivetab] = useState('basket')

    const basketTab = (e)=>{
        // e.preventDefault()
        setActivetab('basket')
    }

    const historyTab = (e)=>{
        setActivetab('history')
    }

    const profileTab = (e)=>{
        setActivetab('profile')
    }



    return <section className="profile_container">
                <div className="logo_container">
                    <img src={logo} alt="Akaani Logo" />
                </div>
                <div className="whitespace"></div>
                <div className="profile_nav">
                    <button className={`user_tab-btn ${activeTab === 'profile' && `active`}`} onClick={profileTab}><img src={userImg} alt="Profile button"  /> <p>Profile</p></button>
                    <button className={`user_tab-btn ${activeTab === 'basket' && `active`}`} onClick={basketTab}><img src={baskets} alt="Profile button" /> <p>Baskets</p></button>
                    <button className={`user_tab-btn ${activeTab === 'history' && `active`}`} onClick={historyTab}><img src={history} alt="Profile button" /> <p>Order History</p></button>
                </div>
                <div className="whitespace_second"></div>
                <div className="profile_user-container">
                    <p className="profile_user-image">
                        LE
                    </p>
                    <p className="profile_user-name">Laura Edson</p>
                    <a href="lauraedson@work.com" className="profile_user-email">lauraedson@work.com</a>
                    <button className="profile_user-logout"><img src={logout} alt="Sign out" /></button>
                </div>
            </section>
}

export default Profile