import './style.css'
import logo from "../../assets/logo.png";
function Header() {
    return (
        <div className='container ashraf'>
            <img src={logo} alt="" />
            <ul>
                <li><a className='a' href="">HOME</a></li>
                <li><a className='a' href="">ABOUT US</a></li>
                <li><a className='a' href="">SERVICES</a></li>
                <li><a className='a' href="">BLOG</a></li>
                <li><a className='a' href="">CONTACT</a></li>
                <li><a className='a' href="">ASHRAF</a></li>
            </ul>
            <button className='btn1'>Book Schedule</button>
        </div>
    );
}

export default Header;