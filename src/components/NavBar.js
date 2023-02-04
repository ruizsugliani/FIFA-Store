import { NavLink } from 'react-router-dom';
import logo from '../images/fifa_store_logo.jpg'
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="navbar container-fluid navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="FIFA LOGO" height="50" className="rounded border"/>
                    </NavLink>
                    <CartWidget />
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item border-bottom ms-3">
                                <NavLink className="nav-NavLink linkButton" to="/category/1">Nations Equipment</NavLink>
                            </li>
                            <li className="nav-item border-bottom ms-3">
                                <NavLink className="nav-NavLink linkButton" to="/category/2">World Cup Merch</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;