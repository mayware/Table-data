import '../styles/navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-brand-name">
                    <NavLink to="/" className={`nav-link`}>
                        <i className="fa-solid fa-book"></i>
                        <span className="nav-brand-title">DataTable</span>
                    </NavLink>
                </div>
            </div>
            <div className="navbar-right">
            </div>
        </nav>
    );
}

export default Navbar;