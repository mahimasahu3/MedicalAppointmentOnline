import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/NavBar.css';  // Import the CSS file

function NavBar() {
    return (
        <div>
            <nav className="nav-container">
                <div className="nav-left">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="nav-logo" />
                    </Link>
                </div>
                <div className="nav-right">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/appointment" className="nav-link">Appointment</Link>
                    <Link to="/health-blog" className="nav-link">Health Blog</Link>
                    <Link to="/reviews" className="nav-link">Reviews</Link>
                    <Link to="/signup" className="nav-link border">Sign Up</Link>
                    <Link to="/login" className="nav-link border">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
